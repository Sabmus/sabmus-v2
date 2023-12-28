import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/app/(models)/User';
import bcrypt from 'bcrypt';

export const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
      profile(profile) {
        let userRole = 'Github role';

        if (profile?.email === 'abiatar.ms@gmail.com') {
          userRole = 'admin';
        }

        return {
          ...profile,
          id: `${profile.id}`,
          role: userRole,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
      profile(profile) {
        let userRole = 'Google role';

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email: ',
          type: 'text',
          placeholder: 'your email',
        },
        password: {
          label: 'password: ',
          type: 'password',
          placeholder: 'your password',
        },
      },
      async authorize(credentials) {
        try {
          const foundUser = await User.findOne({ email: credentials?.email }).exec();

          if (foundUser) {
            const password = credentials?.password || '';
            const match = await bcrypt.compare(password, foundUser.password);

            if (match) {
              delete foundUser.password;
              //foundUser['role'] = 'Unverified email';
              return foundUser;
            }
          }
        } catch (error) {
          throw new Error('some error has occurred');
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) token.role = user.role;

      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
