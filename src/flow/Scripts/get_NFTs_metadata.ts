/** @format */

export const get_NFTs_metadata = () => {
    return `
    import Engage from 0x195942c932186412 
  
    // This script returns all the metadata about the specified NFTMetadata Struct
    // Parameters:
    //
    // metadataID: The unique ID for the struct whose data needs to be read
    
    // Returns: Engage.NFTMetadata
    
    pub fun main(metadataID: UInt64): Engage.NFTMetadata? {
    
        return Engage.getNFTMetadata(metadataID)
    }
    `;
  };