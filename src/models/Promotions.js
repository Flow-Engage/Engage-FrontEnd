import mongoose, { models } from "mongoose";

const Schema = mongoose.Schema;

const PromotionsSchema = new Schema({
    ipfs: String,
    title: String,
    startDate: String,
    endDate:String,    
    details:String,    
});

export const Promotions =  models?.Promotions || mongoose.model("Promotions", PromotionsSchema);
