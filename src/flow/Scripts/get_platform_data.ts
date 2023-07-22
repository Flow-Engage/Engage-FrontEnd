/** @format */

export const getPlatformData = () => {
    return `
    import Engage_2 from 0x195942c932186412 

    // This script returns all the metadata about the specified Platform

    // Parameters:
    //
    // PlatformID: The unique ID for the Platform whose data needs to be read

    // Returns: Engage_2.QueryPlatformData

    pub fun main(platformID: UInt64): Engage_2.QueryPlatformData {

      let data = Engage_2.getPlatformData(_platformID: platformID)
          ?? panic("Could not get data for the specified Platform ID")
  
      return data
  }
    `;
  };