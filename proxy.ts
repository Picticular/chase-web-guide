import { type NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: '/how-to/:path*',
};
