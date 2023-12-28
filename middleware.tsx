import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const pathname = req.nextUrl.pathname;
    const role = req.nextauth?.token?.role;

    if (pathname.startsWith('/CreateUser') && role !== 'admin') {
      return NextResponse.rewrite(new URL('/Denied', req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ['/CreateUser'],
};
