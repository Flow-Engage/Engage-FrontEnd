/** @format */

export const setupAccount = () => {
  return `
import FungibleToken from 0x9a0766d93b6608b7
import NonFungibleToken from 0x631e88ae7f1d7c20
import Engage_2 from 0x1ad3c2a8a0bca093
import NFTStorefrontV2 from 0x2d55b98eb200daef

pub fun hasItems(_ address: Address): Bool {
  return getAccount(address)
    .getCapability<&Engage_2.Collection>(Engage_2.CollectionPublicPath)
    .check()
}

pub fun hasStorefront(_ address: Address): Bool {
  return getAccount(address)
    .getCapability<&NFTStorefrontV2.Storefront{NFTStorefrontV2.StorefrontPublic}>(NFTStorefrontV2.StorefrontPublicPath)
    .check()
}

transaction {
  prepare(acct: AuthAccount) {
    if !hasItems(acct.address) {
      if acct.borrow<&Engage_2.Collection>(from: Engage_2.CollectionStoragePath) == nil {
        acct.save(<-Engage_2.createEmptyCollection(), to: Engage_2.CollectionStoragePath)
      }

      acct.unlink(Engage_2.CollectionPublicPath)

      acct.link<&Engage_2.Collection{Engage_2.Engage_2CollectionPublic, 
        NonFungibleToken.CollectionPublic,
        NonFungibleToken.Receiver,
        MetadataViews.ResolverCollection,
      }>(Engage_2.CollectionPublicPath, target: Engage_2.CollectionStoragePath)
    }

    if !hasStorefront(acct.address) {
      if acct.borrow<&NFTStorefrontV2.Storefront>(from: NFTStorefrontV2.StorefrontStoragePath) == nil {
        acct.save(<-NFTStorefrontV2.createStorefront(), to: NFTStorefrontV2.StorefrontStoragePath)
      }

      acct.unlink(NFTStorefrontV2.StorefrontPublicPath)

      acct.link<&NFTStorefrontV2.Storefront{NFTStorefrontV2.StorefrontPublic}>(NFTStorefrontV2.StorefrontPublicPath, target: NFTStorefrontV2.StorefrontStoragePath)
    }
  }
}
  `;
};