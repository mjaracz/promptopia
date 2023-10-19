import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { connectToDb } from "@utils/database";
import User from '@models/user';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session?.user?.email
      })

      session.user = sessionUser;

      console.log(session.user);

      return session
    },
    async signIn({ profile }) {


      try {
        await connectToDb()

        // check if user already exisit
        const userExists = await User.findOne({
          email: profile?.email
        })

        // if not, create a new user
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(" ", "").toLowerCase(),
            image: profile?.image
          })
        }

        return true;
      } catch (err) {
        console.log(err);

        return false
      }
      return ''
    }
  },
})

export { handler as GET, handler as POST };
