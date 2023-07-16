import { Marketplaces } from "@/models/MarketPlaces";
import { Wishlist } from "@/models/Wishlist";

export default async (req, res) => {
  try {
    const { nftId, user } = req.body;
    let existing = await Wishlist.findOne({ user });
    if (!existing) {
      let post = await Wishlist.create({
        user,
        nft: [nftId],
      }).then((resp) => {
        return resp;
      });
      return res.json({ message: "Wishlist added successfully" });
    } else {
      let old = existing.nft;
      old.push(nftId);
      let a = await Wishlist.updateOne({ user }, { $set: { nft: old } });

      return res.json({ message: "Wishlist added successfully" });
    }
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
