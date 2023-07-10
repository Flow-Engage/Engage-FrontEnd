import { Marketplaces } from "@/models/MarketPlaces";
import clientPromise from "../../../lib/mongodb";
import connectMongo from "@/database/conn";

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
   await connectMongo().catch(err=>console.log(err))
   let post = await Marketplaces.create({
        marketPlaceName,
        marketPlaceCategory,
        marketPlaceReleaseDateTime,
        NFTQuantity,
        maxNFTPUser,
        initialPrice,
        adminCommision,
        NFTDetails1,
        NFTDetails2,
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
