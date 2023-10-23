import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { AuthService } from "./auth.service";

export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async session({ session }) {
      return AuthService.setSession(session);
    },
    async signIn({ profile }) {
      return AuthService.signIn(profile);
    }
  },
})