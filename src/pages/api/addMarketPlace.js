import { Marketplaces } from "@/models/MarketPlaces";
import clientPromise from "../../../lib/mongodb";
import connectMongo from "@/database/conn";
import { NftDetails } from "@/models/NftDetails";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("engage");
    const {
      marketPlaceName,
      marketPlaceCategory,
      marketPlaceReleaseDateTime,
      NFTQuantity,
      maxNFTPUser,
      initialPrice,
      adminCommision,
      NFTDetails1,
      NFTDetails2,
    } = req.body;
    await connectMongo().catch((err) => console.log(err));

    let nftDetailsLen = await NftDetails.find({});
    let len = nftDetailsLen.length

   let details=  await NftDetails.create([
      {
        id: len,
        marketPlaceName: marketPlaceName,
        marketPlaceCategory: marketPlaceCategory,
        name: NFTDetails1.name,
        price: NFTDetails1.price,
        change: 0,
        ipfs: NFTDetails1.ipfs,
      },
      {
        id: len + 1,
        marketPlaceName: marketPlaceName,
        marketPlaceCategory: marketPlaceCategory,
        name: NFTDetails2.name,
        price: NFTDetails2.price,
        change: 0,
        ipfs: NFTDetails2.ipfs,
      },
    ]);
    console.log(details)
    let post = await Marketplaces.create({
      marketPlaceName,
      marketPlaceCategory,
      marketPlaceReleaseDateTime,
      NFTQuantity,
      maxNFTPUser,
      initialPrice,
      adminCommision, 
      NFTDetails1,
      NFTDetails2
    }).then((resp) => {
      console.log(resp);
      console.log("New User Added");
    });
    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
