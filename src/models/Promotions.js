import mongoose, { models } from "mongoose";

const Schema = mongoose.Schema;

const PromotionsSchema = new Schema({
    ipfs: String,
    title: String,
    startDate: String,
    endDate:String,    
    details:String,    
    nftId:String
});

export const Promotions =  models?.Promotion || mongoose.model("Promotion", PromotionsSchema);
