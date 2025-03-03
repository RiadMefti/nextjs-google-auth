import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath = path === "/login";

  // Get the authentication token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Redirect logic
  if (isPublicPath && token) {
    // If user is authenticated and trying to access login,
    // redirect to protectedRoute
    return NextResponse.redirect(new URL("/protected", request.url));
  }

  if (!isPublicPath && path !== "/" && !token) {
    // If user is not authenticated and trying to access a protected route,
    // redirect to login
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Continue to the requested page
  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    // Apply to all routes except API routes and static files
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
