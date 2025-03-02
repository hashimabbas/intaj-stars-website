// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server"; // Import NextFetchEvent
import { chain } from "@/middlewares/chain";
import { withAuthMiddleware } from "@/middlewares/middleware1";
import { withI18nMiddleware } from "@/middlewares/middleware2";

const publicFileRegex =
  /\.(png|jpg|jpeg|gif|svg|ico|webmanifest|txt|pdf|css|js)$/i;

function mainMiddleware(request: NextRequest, event: NextFetchEvent) {
  // Capture the event
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    publicFileRegex.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Pass the original event object
  return chain([withAuthMiddleware, withI18nMiddleware], 0)(
    request,
    event,
    NextResponse.next()
  );
}

export const config = {
  matcher: ["/((?!_next|api|static|favicon.ico).*)"],
};

export default mainMiddleware;
