import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import type { NextAuthOptions } from 'next-auth';
import clientPromise from '@/utils/clientPromise';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '@/utils/dbConn';
import User from '@/db/models/User';
import bcrypt from 'bcrypt';

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'enter your email.' },
        password: { label: 'Password', type: 'password', placeholder: 'enter your password.' },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        await dbConnect();

        try {
          const user = await User.findOne({ email: credentials?.email }).exec();
          if (!user) return null;

          const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

          if (!isPasswordCorrect) {
            throw new Error('email or password are incorrect.');
          }

          delete user.password;
          return user;
        } catch (error: any) {
          throw new Error('something went wrong.', error);
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.user = {
          _id: user.id,
          email: user.email,
          name: user.name,
        };
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
