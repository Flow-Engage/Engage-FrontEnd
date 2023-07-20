/** @format */

export const getAllPlarforms = () => {
    return `
import Engage from 0x195942c932186412 

pub fun main(): [Engage.QueryPlatformData] {

    let allPlatform: [Engage.QueryPlatformData] = []
    let currentId = Engage.nextPlatformID
    var  i = 0 as UInt64

    while (i <= currentId) {
        if let data = Engage.getPlatformData(_platformID: i){

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