/** @format */

export const getCategoryData = () => {
    return `
    import Engage from 0x195942c932186412 

    // This script returns all the metadata about the specified Category
    // Parameters:
    //
    // categoryID: The unique ID for the category whose data needs to be read
    
    // Returns: Engage.QuerycategoryData
    
    pub fun main(categoryID: UInt64): Engage.QueryCategoryData {
    
        let data = Engage.getCategoryData(_categoryID: categoryID)
            ?? panic("Could not get data for the specified Platform ID")
    
        return data
    }
    `;
  };