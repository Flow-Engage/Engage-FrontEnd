import mongoose, { models } from "mongoose";

const Schema = mongoose.Schema;

const NftDetailsSchema = new Schema({
  id: String,
  marketPlaceName: String,
  marketPlaceCategory: String,
  name: String,
  price: String,
  change: String,
  ipfs: String,
});

export const NftDetails = models.nftdetails || mongoose.model("nftdetails", NftDetailsSchema);
