import connectMongo from "@/database/conn";
import { Users } from "@/models/Users";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user) {
        connectMongo().catch((err) => console.log(err));
        const checkExisting = await Users.findOne({ email: user.email });

        if (!checkExisting) {
          Users.create({
            name: user.name,
            email: user.email,
            registeredOn: new Date(),
            isAdmin: false,
          }).then((resp) => {
            console.log(resp);
            console.log("New User Added");
          });
        } else console.log("old User");
        return true;
      }
      return false;
    },
    async redirect({ url, baseUrl }) {

      return `${baseUrl}/Dashboard`;

    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;

        return token;
      }
      return token;
    }, 
  }, 

  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 30 days
    updateAge: 15 * 60, // 24 hours
  },
};
export default NextAuth(authOptions);
