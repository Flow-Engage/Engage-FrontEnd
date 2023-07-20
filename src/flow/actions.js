/** @format */
//@ts-ignore
import * as fcl from "@onflow/fcl";

fcl.config().put("accessNode.api", "https://testnet.onflow.org");
// ///////////////
// // Cadence code
// ///////////////

// Scripts imports
import { get_NFTs_metadata as getNFTsmetadataScript } from "./Scripts/get_NFTs_metadata";
import { getAllPlarforms as getAllPlatformsScript } from "./Scripts/get_all_platforms";
import { getPlatformData as getPlatformDataScript } from "./Scripts/get_platform_data";
import { getCategoryData as getCategoryDataScript } from "./Scripts/get_category_data";
import { getOwnedNFTs as getOwnedNFTsScript } from "./Scripts/get_owned_nfts";

//
// // ****** Script Functions ****** //
//

// Fetch a list of all the platforms.
export const getAllPlatformsData = async () => {
  console.log("CALLED");
  try {
    const response = await fcl.query({
      cadence: getAllPlatformsScript(),
      args: (arg, t) => [],
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// Get info on specific Platform ID.
export const getPlatformData = async () => {
  try {
    const response = await fcl.query({
      cadence: getPlatformDataScript(),
      args: (arg, t) => [arg("0", t.UInt64)],
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// Get info on specific a Category ID.
export const getCategoryData = async () => {
  try {
    const response = await fcl.query({
      cadence: getCategoryDataScript(),
      args: (arg, t) => [arg("0", t.UInt64)],
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// Get list of owned Tap NFTs
export const getOwnedNFTs = async () => {
  try {
    const response = await fcl.query({
      cadence: getOwnedNFTsScript(),
      args: (arg, t) => [arg("0x195942c932186412", t.Address)],
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// Get list of owned Tap NFTs
export const getNftMetadata = async () => {
  try {
    const response = await fcl.query({
      cadence: getNFTsmetadataScript(),
      args: (arg, t) => [arg("0", t.UInt64)],
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};
