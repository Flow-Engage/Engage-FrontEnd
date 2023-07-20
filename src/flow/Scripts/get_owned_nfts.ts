/** @format */

export const getOwnedNFTs = () => {
    return `
    import Engage from 0x195942c932186412 
    import MetadataViews from 0x631e88ae7f1d7c20
  
    pub fun main(Account: Address): [Engage.NFTMetadata] {
        let collection = getAccount(Account).getCapability(Engage.CollectionPublicPath)
                            .borrow<&Engage.Collection{MetadataViews.ResolverCollection}>()!
        let answer: [Engage.NFTMetadata] = []
      
        let ids = collection.getIDs()
      
        for id in ids {
          let resolver = collection.borrowViewResolver(id: id)
          let serialView = resolver.resolveView(Type<MetadataViews.Serial>())! as! MetadataViews.Serial
          answer.append(Engage.getNFTMetadata(serialView.number)!)
        }
      
        return answer
      }
    `;
  };