import { auth } from '@/auth';

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== '/sign-in') {
    const url = new URL('/sign-in', req.nextUrl.origin);
    return Response.redirect(url);
  }
  return undefined;
});

export const config = {
  matcher: ['/((?!api/auth|_next/static|_next/image|favicon.ico|sign-in).*)'],
};
