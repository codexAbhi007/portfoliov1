import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hasVisited = request.cookies.get("hasVisited");

  // If the user visits the root page and hasn't visited any page on the site before
  if (!hasVisited && request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/about";
    const response = NextResponse.redirect(url);
    
    // Set a cookie so they don't get redirected again on this device/browser
    response.cookies.set("hasVisited", "true", { 
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: true, 
      sameSite: "lax" 
    });
    
    return response;
  }

  // If they land on any other page first (like /about or /work)
  // we still want to set the cookie so that if they later navigate to "/" 
  // they don't get surprisingly redirected.
  if (!hasVisited) {
    const response = NextResponse.next();
    response.cookies.set("hasVisited", "true", { 
      maxAge: 60 * 60 * 24 * 365, 
      httpOnly: true, 
      sameSite: "lax" 
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all request paths except for the ones starting with API, static files, images, or standard root files
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
