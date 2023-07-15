import { NftDetails } from "@/models/NftDetails";

export default async (req, res) => {
  try {
    const { id } = req.query;
    let query = id === "All" ? {} : { marketPlaceCategory: id };

    let topThree = await NftDetails.find(query).then((resp) => {
      // Sort the array based on the change value in descending order
      resp.sort((a, b) => parseInt(b.change) - parseInt(a.change));
 

      return resp;
    });
    res.json(topThree)
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
