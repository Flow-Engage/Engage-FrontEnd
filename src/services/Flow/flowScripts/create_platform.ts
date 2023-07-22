/** @format */

export const create_platform = () => {
  return `

  import Engage_2 from 0x1ad3c2a8a0bca093

  // This transaction is for the admin to create a new Platform resource
  // and store it in the Engage_2 smart contract
  // Parameters:
  //
  // platformName: the name of a new platform to be created
  
  transaction(platformName: String) {
      
      // Local variable for the Engage_2 Admin object
      let adminRef: &Engage_2.Administrator
      let newPlatformID: UInt64
  
      prepare(acct: AuthAccount) {
  
          // borrow a reference to the Admin resource in storage
          self.adminRef = acct.borrow<&Engage_2.Administrator>(from: /storage/Engage_2Administrator)
              ?? panic("Could not borrow a reference to the Administrator resource")
  
          // Create a platform with the specified name        
          self.newPlatformID = self.adminRef.createPlatform(_name: platformName)
      }
  
      post {
          Engage_2.getPlatformData(_platformID: self.newPlatformID)?.name == platformName:
            "Could not find the specified platform"
      }
  }
  `;
};
