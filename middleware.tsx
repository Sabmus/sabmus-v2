/* import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const pathname = req.nextUrl.pathname;

    if (pathname.startsWith('/projects/create')) {
      return NextResponse.rewrite(new URL('/denied', req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);
 */
export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/projects/create'],
};
