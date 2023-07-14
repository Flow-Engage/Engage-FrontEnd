/** @format */

export const setupAccount = () => {
  return `
import FungibleToken from 0x9a0766d93b6608b7
import NonFungibleToken from 0x631e88ae7f1d7c20
import Engage from 0x1ad3c2a8a0bca093
import NFTStorefrontV2 from 0x2d55b98eb200daef

pub fun hasItems(_ address: Address): Bool {
  return getAccount(address)
    .getCapability<&Engage.Collection>(Engage.CollectionPublicPath)
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
      if acct.borrow<&Engage.Collection>(from: Engage.CollectionStoragePath) == nil {
        acct.save(<-Engage.createEmptyCollection(), to: Engage.CollectionStoragePath)
      }

      acct.unlink(Engage.CollectionPublicPath)

      acct.link<&Engage.Collection{Engage.EngageCollectionPublic, 
        NonFungibleToken.CollectionPublic,
        NonFungibleToken.Receiver,
        MetadataViews.ResolverCollection,
      }>(Engage.CollectionPublicPath, target: Engage.CollectionStoragePath)
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