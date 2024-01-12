/*import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
//import type { NextAuthOptions } from 'next-auth';
import clientPromise from '@/lib/clientPromise';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '@/lib/dbConn';
import User from '@/db/models/User';
import bcrypt from 'bcrypt';

const login = async (credentials: any) => {
  if (!credentials) return null;

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

export const authOptions = {
  //adapter has a warning because MongoDBAdapter should come from @next-auth/mongodb-adapter
  //but in the docs they use @auth/mongodb-adapter
  // @ts-ignore
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
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async session({ session, token }: any) {
      if (token) {
        session.user = {
          _id: token.sub,
          name: token.name,
          email: token.email,
        };
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
*/

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [],
  callbacks: {
    authorized({ auth, request }: { auth: any; request: any }) {
      const user = auth?.user;

      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');
      const isOnAdminPage = request.nextUrl?.pathname.startsWith('/admin');

      if (isOnLoginPage && user) {
        return Response.redirect(new URL('/', request.nextUrl));
      }

      if (isOnAdminPage && !user) {
        return false;
      }

      return true;
    },
  },
};
