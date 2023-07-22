/** @format */

export const create_listing = () => {
    return `
    
    import FungibleToken from 0x9a0766d93b6608b7
    import NonFungibleToken from 0x631e88ae7f1d7c20
    import FlowToken from 0x7e60df042a9c0868
    import NFTStorefrontV2 from 0x2d55b98eb200daef
    import Engage_2 from 0x1ad3c2a8a0bca093
    
    pub fun getOrCreateStorefront(account: AuthAccount): &NFTStorefrontV2.Storefront {
      if let storefrontRef = account.borrow<&NFTStorefrontV2.Storefront>(from: NFTStorefrontV2.StorefrontStoragePath) {
        return storefrontRef
      }
    
      let storefront <- NFTStorefrontV2.createStorefront()
    
      let storefrontRef = &storefront as &NFTStorefrontV2.Storefront
    
      account.save(<-storefront, to: NFTStorefrontV2.StorefrontStoragePath)
    
      account.link<&NFTStorefrontV2.Storefront{NFTStorefrontV2.StorefrontPublic}>(NFTStorefrontV2.StorefrontPublicPath, target: NFTStorefrontV2.StorefrontStoragePath)
    
      return storefrontRef
    }
    
    transaction(saleItemID: UInt64, saleItemPrice: UFix64) {
    
      let flowReceiver: Capability<&FlowToken.Vault{FungibleToken.Receiver}>
      let Engage_2Provider: Capability<&Engage_2.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>
      let storefront: &NFTStorefrontV2.Storefront
    
      prepare(account: AuthAccount) {
        // We need a provider capability, but one is not provided by default so we create one if needed.
        let Engage_2CollectionProviderPrivatePath = /private/Engage_2CollectionProviderV14
    
        self.flowReceiver = account.getCapability<&FlowToken.Vault{FungibleToken.Receiver}>(/public/flowTokenReceiver)!
    
        assert(self.flowReceiver.borrow() != nil, message: "Missing or mis-typed FLOW receiver")
    
        if !account.getCapability<&Engage_2.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(Engage_2CollectionProviderPrivatePath)!.check() {
          account.link<&Engage_2.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(Engage_2CollectionProviderPrivatePath, target: Engage_2.CollectionStoragePath)
        }
    
        self.Engage_2Provider = account.getCapability<&Engage_2.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(Engage_2CollectionProviderPrivatePath)!
    
        assert(self.Engage_2Provider.borrow() != nil, message: "Missing or mis-typed Engage_2.Collection provider")
    
        self.storefront = getOrCreateStorefront(account: account)
      }
    
      execute {
        let saleCut = NFTStorefrontV2.SaleCut(
          receiver: self.flowReceiver,
          amount: saleItemPrice
        )
    
        self.storefront.createListing(
          nftProviderCapability: self.Engage_2Provider,
          nftType: Type<@Engage_2.NFT>(),
          nftID: saleItemID,
          salePaymentVaultType: Type<@FlowToken.Vault>(),
          saleCuts: [saleCut],
          marketplacesCapability: nil, // [Capability<&{FungibleToken.Receiver}>]?
          customID: nil, // String?
          commissionAmount: UFix64(0),
          expiry: UInt64(getCurrentBlock().timestamp) + UInt64(500)
        )
      }
    }
    
    `;
  };
  