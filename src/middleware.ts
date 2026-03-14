import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {

  const admin = req.cookies.get("admin");

  if(!admin && req.nextUrl.pathname.startsWith("/admin/dashboard")){

    return NextResponse.redirect(
      new URL("/admin/login",req.url)
    );

  }

  return NextResponse.next();
}

export const config = {
  matcher:["/admin/:path*"]
};