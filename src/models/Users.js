import mongoose, { models } from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  email: String,
  registeredOn: Date,
  isAdmin:Boolean,
  
});

export const Users =  models.User || mongoose.model("User", User);
