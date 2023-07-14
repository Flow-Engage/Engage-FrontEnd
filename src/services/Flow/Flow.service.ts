/** @format */

import AxiosService from "../Axios/Axios.service";
// Need to change these imports
import { create_platform as create_platformScript } from "./flowScripts/create_platform";
import { create_category as create_categoryScript } from "./flowScripts/create_category";
import { create_match as create_matchScript } from "./flowScripts/create_match";
import { create_listing as create_listingScript } from "./flowScripts/create_listing";
import { purchase_listing as purchase_listingScript } from "./flowScripts/purchase_listing";
import { remove_listing as remove_listingScript } from "./flowScripts/remove_listing";
import { setupAccount as setupAccountScript } from "./flowScripts/setup_account";
import { mintNFT as mintNFTScript } from "./flowScripts/mint_nfts";

class FlowService {
  async setupAccount(accountAddress: string) {
    try {
      let data = JSON.stringify({
        code: setupAccountScript(),
      });
      const response = await AxiosService.post(
        `/accounts/${accountAddress}/transactions`,
        data
      );
      return response;
    } catch (error) {
      console.log(
        error,
        `Error when trying to setup account:${accountAddress} with the Engage Collection`
      );
      return error;
    }
  }

  // Create a new Platform resource
  async create_platform(platformName: string) {
    try {
      var data = JSON.stringify({
        code: create_platformScript(),
        arguments: [
          {
            type: "String",
            value: platformName,
          },
        ],
      });

      const response = await AxiosService.post(
        "/accounts/0x1ad3c2a8a0bca093/transactions",
        data
      );
      return response;
    } catch (error) {
      console.log(error, "Error when trying to create a Platform on the contract");
      return error;
    }
  }

  // Create a new Category resource
  async create_category(categoryName: string, platformID: string) {
    try {
      var data = JSON.stringify({
        code: create_categoryScript(),
        arguments: [
          {
            type: "String",
            value: categoryName,
          },
          {
            type: "UInt64",
            value: platformID,
          },
        ],
      });

      const response = await AxiosService.post(
        "/accounts/0x1ad3c2a8a0bca093/transactions",
        data
      );
      return response;
    } catch (error) {
      console.log(error, "Error when trying to create a Category on the contract");
      return error;
    }
  }

  // Create a new Match resource
  async create_match(matchName: string, categoryName: string, platformID: string) {
    try {
      var data = JSON.stringify({
        code: create_matchScript(),
        arguments: [
          {
            type: "String",
            value: matchName,
          },
          {
            type: "String",
            value: categoryName,
          },
          {
            type: "UInt64",
            value: platformID,
          },
        ],
      });

      const response = await AxiosService.post(
        "/accounts/0x1ad3c2a8a0bca093/transactions",
        data
      );
      return response;
    } catch (error) {
      console.log(error, "Error when trying to create a Match on the contract");
      return error;
    }
  }

  async mintNFT(matchID: string, quantity: string, name: string, description: string, imgURL: string) {
    try {
      let data = JSON.stringify({
        code: mintNFTScript(),
        arguments: [
          {
            type: "UInt64",
            value: matchID,
          },
          {
            type: "UInt64",
            value: quantity,
          },
          {
            type: "String",
            value: name,
          },
          {
            type: "String",
            value: description,
          },
          {
            type: "String",
            value: imgURL,
          },
        ],
      });
      const response = await AxiosService.post(
        "/accounts/0x1ad3c2a8a0bca093/transactions",
        data
      );
      return response;
    } catch (error) {
      console.log(
        error,
        `Error when trying to mint NFTs`
      );
    }
  }

  // Create a new NFT Listing
  async create_listing(saleItemID: string, saleItemPrice: string) {
    try {
      var data = JSON.stringify({
        code: create_listingScript(),
        arguments: [
          {
            type: "UInt64",
            value: saleItemID,
          },
          {
            type: "UFix64",
            value: saleItemPrice,
          },
        ],
      });

      

      const response = await AxiosService.post(
        "/accounts/0x1ad3c2a8a0bca093/transactions",
        data
      );
      return response;
    } catch (error) {
      console.log(error, "Error when trying to create an NFT listing on the market");
      return error;
    }
  }

    // Remove an NFT listing 
    async remove_listing(listingResourceID: string) {
      try {
        var data = JSON.stringify({
          code: remove_listingScript(),
          arguments: [
            {
              type: "UInt64",
              value: listingResourceID,
            },
          ],
        });
  
        
  
        const response = await AxiosService.post(
          "/accounts/0x1ad3c2a8a0bca093/transactions",
          data
        );
        return response;
      } catch (error) {
        console.log(error, "Error when trying to remove an NFT listing from the market");
        return error;
      }
    }

        // Makes a purchase on an NFT
        async purchase_listing(saleItemID: string, saleItemPrice: string) {
          try {
            var data = JSON.stringify({
              code: purchase_listingScript(),
              arguments: [
                {
                  type: "UInt64",
                  value: saleItemID,
                },
                {
                  type: "UFix64",
                  value: saleItemPrice,
                },
              ],
            });
      
            
      
            const response = await AxiosService.post(
              "/accounts/0x1ad3c2a8a0bca093/transactions",
              data
            );
            return response;
          } catch (error) {
            console.log(error, "Error when trying to make an NFT purchase from the market");
            return error;
          }
        }
}

export default new FlowService();
