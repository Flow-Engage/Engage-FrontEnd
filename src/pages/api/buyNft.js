import connectMongo from "@/database/conn";
import { Notifications } from "@/models/Notifications";
import { Wallet } from "@/models/Wallet";

export default async (req, res) => {
  try {
    const { user, nftId, buyPrice } = req.body;
    await connectMongo().catch((err) => console.log(err));
    let existing = await Wallet.findOne({ user });

    if (existing) {
      let arr = existing.nftId;
      arr.push(nftId + ":" + buyPrice);

      let update = await Wallet.updateOne({ user }, { $set: { nftId: arr } });
      console.log(update);
      res.json({ message: "Nft minted" });
    } else {
      let post = await Wallet.create({
        user,
        nftId: [nftId + ":" + buyPrice],
      }).then((resp) => {
        console.log(resp);
      });
      res.json({ post, message: "Nft minted" });
    }
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
