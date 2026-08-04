import { NextRequest, NextResponse } from "next/server";

// nrki.no viser kun landingssiden. Resten av konseptsidene ligger fortsatt
// i repoet, men er ikke tilgjengelige på nett — alt annet sendes til /.
export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|opengraph-image|robots.txt).*)",
  ],
};
