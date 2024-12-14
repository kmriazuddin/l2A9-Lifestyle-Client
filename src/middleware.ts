import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./services/authService";
import { IUserToken } from "./interface/tokent.interface";

export async function middleware(request: NextRequest) {
  const user = (await getCurrentUser()) as IUserToken;

  if (
    !user &&
    (request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/signup")
  ) {
    return NextResponse.next();
  }

  if (
    user?.role == "ADMIN" ||
    (user?.role == "SUPERADMIN" &&
      request.nextUrl.pathname.startsWith("/admin"))
  ) {
    return NextResponse.next();
  }

  if (
    user?.role == "CUSTOMER" &&
    request.nextUrl.pathname.startsWith("/customer")
  ) {
    return NextResponse.next();
  }
  if (
    user?.role == "CUSTOMER" &&
    request.nextUrl.pathname.startsWith("/cart")
  ) {
    return NextResponse.next();
  }

  if (
    user?.role == "VENDOR" &&
    request.nextUrl.pathname.startsWith("/vendor")
  ) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname === "/product") {
    return NextResponse.next();
  }

  const productDetailsPattern = /^\/product\/[^/]+$/;

  if (user && productDetailsPattern.test(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/customer/:path*",
    "/admin/:path*",
    "/login",
    "/cart",
    "/product/:path*",
  ],
};
