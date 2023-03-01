import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import mongodb from '../../../lib/mongodb';
import clientPromise from '../../../lib/mongodb';

const adapter = MongoDBAdapter(mongodb);
export const authOptions = {
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(mongodb),
  providers: [
    GoogleProvider.default({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth.default(authOptions)
