/** @format */

export const get_NFTs_metadata = () => {
    return `
    import Engage_2 from 0x195942c932186412 
  
    // This script returns all the metadata about the specified NFTMetadata Struct
    // Parameters:
    //
    // metadataID: The unique ID for the struct whose data needs to be read
    
    // Returns: Engage_2.NFTMetadata
    
    pub fun main(metadataID: UInt64): Engage_2.NFTMetadata? {
    
        return Engage_2.getNFTMetadata(metadataID)
    }
    `;
  };