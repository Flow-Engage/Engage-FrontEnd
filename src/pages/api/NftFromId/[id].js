import { NftDetails } from "@/models/NftDetails";

export default async (req, res) => {
  try {
    const { id } = req.query;
    let query = id === "All" ? {} : { id: id };
    let post = await NftDetails.find(query).then((resp) => {

      return res.json(resp);
    });
  } catch (e) {
    console.error(e);
   // throw new Error(e).message;
  }
};
