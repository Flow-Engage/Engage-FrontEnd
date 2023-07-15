import { NftDetails } from "@/models/NftDetails";

export default async (req, res) => {
  try {
    const { id } = req.query;
    let query = id === "All" ? {} : { marketPlaceCategory: id };

    let topThree = await NftDetails.find(query).then((resp) => {

      resp.sort((a, b) => parseInt(a.change) - parseInt(b.change));

      return resp;
    });
    res.json(topThree)
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
