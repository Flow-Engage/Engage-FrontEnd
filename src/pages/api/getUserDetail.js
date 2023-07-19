import { Users } from "@/models/Users";

export default async (req, res) => {
  try {
    const { email } = req.body;


    let user = await Users.findOne({email:email})
    console.log(user,email)
    res.json(user)
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
