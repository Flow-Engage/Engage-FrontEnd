import { NftDetails } from "@/models/NftDetails";
import { Wishlist } from "@/models/Wishlist";

export default async (req, res) => {
  try {
    const { id } = req.query;

    let topThree = await Wishlist.findOne({ user: id }).then(async (resp) => {
      if (resp) {
        const intArray = resp.nft.map(Number);

        return intArray;
      }
    });

    if (topThree) {
      let nftNames = await NftDetails.find({});

      if (nftNames) {
        const result = nftNames.filter((obj) =>
          topThree.includes(parseInt(obj.id))
        );

        return res.json(result);
      } else {
        return res.json([]);
      }
    } else {
      return res.json([]);
    }
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
