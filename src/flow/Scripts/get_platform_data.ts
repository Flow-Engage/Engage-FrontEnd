/** @format */

export const getPlatformData = () => {
    return `
    import Engage from 0x195942c932186412 

    // This script returns all the metadata about the specified Platform

    // Parameters:
    //
    // PlatformID: The unique ID for the Platform whose data needs to be read

    // Returns: Engage.QueryPlatformData

    pub fun main(platformID: UInt64): Engage.QueryPlatformData {

      let data = Engage.getPlatformData(_platformID: platformID)
          ?? panic("Could not get data for the specified Platform ID")
  
      return data
  }
    `;
  };