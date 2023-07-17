import { Promotions } from "@/models/Promotions";

export default async (req, res) => {
  try {
    const { id } = req.query;
    let query = id === "All" ? {} : { title: id };

    let topThree = await Promotions.find(query).then((resp) => {
      return resp;
    });
    res.json(topThree);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
