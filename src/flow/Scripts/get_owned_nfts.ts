/** @format */

export const getOwnedNFTs = () => {
    return `
    import Engage_2 from 0x195942c932186412 
    import MetadataViews from 0x631e88ae7f1d7c20
  
    pub fun main(Account: Address): [Engage_2.NFTMetadata] {
        let collection = getAccount(Account).getCapability(Engage_2.CollectionPublicPath)
                            .borrow<&Engage_2.Collection{MetadataViews.ResolverCollection}>()!
        let answer: [Engage_2.NFTMetadata] = []
      
        let ids = collection.getIDs()
      
        for id in ids {
          let resolver = collection.borrowViewResolver(id: id)
          let serialView = resolver.resolveView(Type<MetadataViews.Serial>())! as! MetadataViews.Serial
          answer.append(Engage_2.getNFTMetadata(serialView.number)!)
        }
      
        return answer
      }
    `;
  };