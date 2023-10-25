import User from "@models/user";
import { connectToDb } from "@utils/database";
import { Profile, Session } from "next-auth";

export class AuthService {
  static async signIn(profile?: Profile) {
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
          image: profile?.picture
        })
      }

      return true;
    } catch (err) {
      console.log(err);

      return false
    }
  }
  static async setSession(session: Session) {
    const sessionUser = await User.findOne({
      email: session?.user?.email
    })
    session.user.name = sessionUser.username;

    return session
  }
}