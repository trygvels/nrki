import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, AUTH_COOKIE_VALUE } from "@/lib/auth";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path.startsWith("/login")) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get(AUTH_COOKIE);
  if (cookie?.value === AUTH_COOKIE_VALUE) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt).*)"],
};
