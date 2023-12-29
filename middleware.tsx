import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const pathname = req.nextUrl.pathname;
    const role = req.nextauth?.token?.role;
    console.log('token: ', req.nextauth?.token);

    if (pathname.startsWith('/CreateUser') && role !== 'admin') {
      return NextResponse.rewrite(new URL('/denied', req.url));
    }

    /*    if (pathname.startsWith('/login') && req.nextauth?.token) {
      console.log(req.nextauth?.token);
      console.log('hola');

      return NextResponse.redirect(new URL('/', req.url));
    } */
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
