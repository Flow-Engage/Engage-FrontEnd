import mongoose, { models } from "mongoose";

const Schema = mongoose.Schema;

const wishlistScheme = new Schema({
  user: String,
  nft: Array, 
});

export const Wishlist =  models.wishlist || mongoose.model("wishlist", wishlistScheme);
