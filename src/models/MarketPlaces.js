import mongoose, { models } from "mongoose";

const Schema = mongoose.Schema;

const Marketplace = new Schema({
    marketPlaceName: String,
    marketPlaceCategory: String,
    marketPlaceReleaseDateTime: String,
    NFTQuantity:String,    
    maxNFTPUser:String,    
    initialPrice:String,    
    adminCommision:String,    
    NFTDetails1:Object,
    NFTDetails2:Object,
});

export const Marketplaces =  models?.Marketplace || mongoose.model("Marketplace", Marketplace);
