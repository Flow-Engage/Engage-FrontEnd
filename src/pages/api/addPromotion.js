import { Marketplaces, Promotions } from "@/models/Promotions";

import connectMongo from "@/database/conn";

export default async (req, res) => {
  try {
    await connectMongo().catch(err=>console.log(err))
    const {
        ipfs,
        title,
        startDate,
        endDate,
        details,
        nftId
    } = req.body;
console.log(nftId)
    let post = await Promotions.create({
      nftId,
      ipfs,
      title,
      startDate,
      endDate,
      details,
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
