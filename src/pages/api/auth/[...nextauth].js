import {MongoDBAdapter} from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import assert from 'node:assert';
import mongodb from '../../../lib/mongodb';

assert(process.env.GOOGLE_CLIENT_ID);
assert(process.env.GOOGLE_CLIENT_SECRET);

export const authOptions = {
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(mongodb), providers: [
    GoogleProvider.default({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
export default NextAuth.default(authOptions);
