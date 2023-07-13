
import connectMongo from "@/database/conn";
import { Notifications } from "@/models/Notifications";

export default async (req, res) => {
  try {
    await connectMongo().catch(err=>console.log(err))
    const {
       
      title, 
      description,
    } = req.body;
    await connectMongo().catch((err) => console.log(err));
    let post = await Notifications.create({

      title, 
      description,
    }).then((resp) => {
      console.log(resp);
      console.log("New User Added");
    });
    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
