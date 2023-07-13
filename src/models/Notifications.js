import mongoose, { models } from "mongoose";

const Schema = mongoose.Schema;

const NotificationsSchema = new Schema({
    title: String,
    description:String,    
});

export const Notifications =  models?.Notifications || mongoose.model("Notifications", NotificationsSchema);
