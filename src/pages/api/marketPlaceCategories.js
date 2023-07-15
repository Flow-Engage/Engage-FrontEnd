import { Marketplaces } from "@/models/MarketPlaces";

export default async (req, res) => {
  try {
    let post = await Marketplaces.find({}).then((resp) => {
      const uniqueMarketPlaceCategories = Array.from(new Set(resp.map(item => item.marketPlaceCategory)));

      res.json(uniqueMarketPlaceCategories);
    });
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
