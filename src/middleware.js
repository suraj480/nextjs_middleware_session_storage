import { NextResponse } from 'next/server';
export function middleware(request) {
    console.log('Middleware triggerred! ');
    if (request.nextUrl.pathname === "/about") {
        return NextResponse.redirect(new URL('/', request.url));
    }
    // return NextResponse.next();
}
export const config = {
   // matcher: ['/:path*']  // This ensures it runs for all paths 
     matcher: ['/contact']
}