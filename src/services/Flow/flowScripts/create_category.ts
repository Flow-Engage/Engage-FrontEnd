/** @format */


export const create_category = () => {
  return `

  import Engage_2 from 0x1ad3c2a8a0bca093

  // This transaction is for the admin to create a new Category resource
  // and store it in the Engage_2 smart contract
  // Parameters:
  //
  // categoryName: the name of a new Category to be created
  // platformID: the ID of the platform this category belongs to
  
  
  transaction(categoryName: String, platformID: UInt64) {
      
      // Local variable for the Engage_2 Admin object
      let adminRef: &Engage_2.Administrator
      let newCategoryID: UInt64
  
      prepare(acct: AuthAccount) {
  
          // borrow a reference to the Admin resource in storage
          self.adminRef = acct.borrow<&Engage_2.Administrator>(from: /storage/Engage_2Administrator)
              ?? panic("Could not borrow a reference to the Administrator resource")
  
          // Create a Category with the specified name        
          self.newCategoryID = self.adminRef.createCategory(_name: categoryName, _platformID: platformID)
  
      }
  
      post {
          Engage_2.getPlatformCategories(_platformID: platformID)?.containsKey(categoryName)!:
            "Could not find the specified category"
      } 
  }
  `;
};
