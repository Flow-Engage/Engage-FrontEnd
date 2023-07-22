/** @format */

export const getAllPlarforms = () => {
    return `
import Engage_2 from 0x195942c932186412 

pub fun main(): [Engage_2.QueryPlatformData] {

    let allPlatform: [Engage_2.QueryPlatformData] = []
    let currentId = Engage_2.nextPlatformID
    var  i = 0 as UInt64

    while (i <= currentId) {
        if let data = Engage_2.getPlatformData(_platformID: i){

            allPlatform.append(data)
            i = i + 1 
        } else {
            return allPlatform
        }
    
    }

    return allPlatform
}
    `;
  };