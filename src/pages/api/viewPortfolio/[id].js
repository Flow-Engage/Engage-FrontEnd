import { NftDetails } from "@/models/NftDetails";
import { Wallet } from "@/models/Wallet";

export default async (req, res) => {
  try {
    const { id } = req.query;

    let walletMap = new Map();

    let topThree = await Wallet.findOne({ user: id });
    topThree.nftId.map((elem)=>{
      let arr  = elem.split(":")
      if(arr)walletMap.set(parseInt(arr[0]), parseInt(arr[1].replace(/\$/g, "")))
    })

    let Nft = await NftDetails.find({ id: { $in: Array.from(walletMap.keys()) } }, { _id: 0 });

    Nft.map((elem)=>{
      let val = walletMap.get(parseInt(elem.id))
      walletMap.set(parseInt(elem.id),{details:elem,buyPrice:val})
    })

    res.json({map:Object.fromEntries(walletMap)});
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
