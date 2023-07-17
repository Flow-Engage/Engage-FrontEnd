import mongoose, { models } from "mongoose";

const Schema = mongoose.Schema;

const WalletScheme = new Schema({
    user:String,
    nftId:Array,
});

export const Wallet =  models?.Wallet || mongoose.model("Wallet", WalletScheme);
