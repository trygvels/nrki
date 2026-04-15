import { NextRequest, NextResponse } from "next/server";

const USERNAME = "nrki";
const PASSWORD = "passord";

export function middleware(req: NextRequest) {
  const auth = req.headers.get("authorization");
  const expected = "Basic " + btoa(`${USERNAME}:${PASSWORD}`);

  if (auth === expected) {
    return NextResponse.next();
  }

  return new NextResponse("Innlogging kreves.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="nrki", charset="UTF-8"',
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt).*)"],
};
