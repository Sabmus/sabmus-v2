import NextAuth from 'next-auth';
import { authConfig } from '@/app/api/auth/[...nextauth]/auth.config';

export default NextAuth(authConfig).auth;

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
