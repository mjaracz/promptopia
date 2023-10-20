import { User, Profile as DefaultProfile } from "next-auth";

declare module 'next-auth' {
  interface Session {
    user: User
  }
  interface Profile extends DefaultProfile {
    picture: string;
  }
}