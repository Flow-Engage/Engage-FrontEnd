export const purchase_listing = () => {`
import FungibleToken from 0x9a0766d93b6608b7
import FlowToken from 0x7e60df042a9c0868
import NonFungibleToken from 0x631e88ae7f1d7c20
import NFTStorefrontV2 from 0x2d55b98eb200daef
import Engage_2 from 0x1ad3c2a8a0bca093

pub fun getOrCreateCollection(account: AuthAccount): &Engage_2.Collection{NonFungibleToken.Receiver} {
    if let collectionRef = account.borrow<&Engage_2.Collection>(from: Engage_2.CollectionStoragePath) {
        return collectionRef
    }

    // create a new empty collection
    let collection <- Engage_2.createEmptyCollection() as! @Engage_2.Collection

    let collectionRef = &collection as &Engage_2.Collection

    // save it to the account
    account.save(<-collection, to: Engage_2.CollectionStoragePath)

    // create a public capability for the collection
    account.link<&Engage_2.Collection{NonFungibleToken.CollectionPublic}>(Engage_2.CollectionPublicPath, target: Engage_2.CollectionStoragePath)

    return collectionRef
}

transaction(listingResourceID: UInt64, storefrontAddress: Address) {
    let paymentVault: @FungibleToken.Vault
    let Engage_2Collection: &Engage_2.Collection{NonFungibleToken.Receiver}
    let storefront: &NFTStorefrontV2.Storefront{NFTStorefrontV2.StorefrontPublic}
    let listing: &NFTStorefrontV2.Listing{NFTStorefrontV2.ListingPublic}

    prepare(account: AuthAccount) {
        // Access the storefront public resource of the seller to purchase the listing.
        self.storefront = getAccount(storefrontAddress)
            .getCapability<&NFTStorefrontV2.Storefront{NFTStorefrontV2.StorefrontPublic}>(
                NFTStorefrontV2.StorefrontPublicPath
            )!
            .borrow()
            ?? panic("Could not borrow Storefront from provided address")

        // Borrow the listing
        self.listing = self.storefront.borrowListing(listingResourceID: listingResourceID)
                    ?? panic("No Offer with that ID in Storefront")
        let price = self.listing.getDetails().salePrice

        // Access the vault of the buyer to pay the sale price of the listing.
        let mainFlowVault = account.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)
            ?? panic("Cannot borrow FlowToken vault from account storage")
        self.paymentVault <- mainFlowVault.withdraw(amount: price)

        self.Engage_2Collection = getOrCreateCollection(account: account)
    }

    execute {
        let item <- self.listing.purchase(
            payment: <-self.paymentVault,
            commissionRecipient: nil
        )

        self.Engage_2Collection.deposit(token: <-item)
        self.storefront.cleanupPurchasedListings(listingResourceID: listingResourceID)
    }
}
`
}