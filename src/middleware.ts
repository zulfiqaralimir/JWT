import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = cookies().get("taken");
  if (!token) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
  // console.log("middleware is in secret");
  return NextResponse.redirect(new URL("/login", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/secret/:path*",
};

// export const config = { matcher:["/secret"],}
