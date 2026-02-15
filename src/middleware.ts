import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only use cookies in middleware - localStorage is not available here
  const token = request.cookies.get('token')?.value;
  
  const isAuthenticated = !!token;
  const isAuthPage = request.nextUrl.pathname.startsWith('/login') || 
                     request.nextUrl.pathname.startsWith('/signup');
  const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard');

  // Redirect to login if accessing dashboard without auth
  if (isDashboardPage && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Redirect to dashboard if accessing auth pages while authenticated
  if (isAuthPage && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/signup'],
};