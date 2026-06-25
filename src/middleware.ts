import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "@/src/i18n/routing";
import { getToken } from "next-auth/jwt";

const intlMiddleware = createIntlMiddleware(routing);
const protectedPaths = ["/dashboard"];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    /\.(png|jpg|jpeg|gif|svg|ico|webmanifest|txt|pdf|css|js)$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

  const hasLocale = ["en", "ar"].some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (hasLocale) {
    const isProtected = ["en", "ar"].some((l) =>
      protectedPaths.some(
        (p) =>
          pathname === `/${l}${p}` || pathname.startsWith(`/${l}${p}/`)
      )
    );

    if (isProtected) {
      const token = await getToken({ req: request });
      if (!token) {
        const locale =
          ["en", "ar"].find((l) => pathname.startsWith(`/${l}`)) || "en";
        const loginUrl = new URL(`/${locale}/login`, request.url);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(loginUrl);
      }
    }

    return intlMiddleware(request);
  }

  const locale =
    request.cookies.get("NEXT_LOCALE")?.value || "en";
  return NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/", "/((?!_next|api|static|favicon.ico).*)"],
};
