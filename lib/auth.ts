import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from '@/lib/clientPromise';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '@/lib/dbConn';
import User from '@/db/models/User';
import bcrypt from 'bcrypt';
import { authConfig } from '@/app/api/auth/[...nextauth]/auth.config';
// import GitHub from 'next-auth/providers/github';

const login = async (credentials: any) => {
  try {
    await dbConnect();

    const user = await User.findOne({ email: credentials?.email }).exec();
    if (!user) {
      throw new Error('email or password are incorrect.');
    }

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

    if (!isPasswordCorrect) {
      throw new Error('email or password are incorrect.');
    }

    delete user.password;
    return user;
  } catch (error: any) {
    throw new Error('something went wrong.', error);
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      async authorize(credentials: any) {
        try {
          await dbConnect();

          const user = await User.findOne({ email: credentials?.email }).exec();
          if (!user) {
            throw new Error('email or password are incorrect.');
          }

          const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

          if (!isPasswordCorrect) {
            throw new Error('email or password are incorrect.');
          }

          delete user.password;
          return user;
        } catch (error) {
          console.log('🚀 ~ authorize ~ error:', error);
        }
        return null;
      },
    }),
  ],
});
