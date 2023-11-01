import { cookieName, fallbackLng, languages } from "@/app/i18n/settings";
import acceptLanguage from "accept-language";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  // matcher: '/:lng*'
  matcher: [
    "/((?!api|_next/static|_next/images|assets|favicon.ico|sw.js|.*\\..*).*)",
    // "/((?!api|static|.*\\..*|_next).*)"
  ],
};

acceptLanguage.languages(languages);

export function middleware(req: NextRequest) {
  let lng;

  if (req.cookies.has(cookieName)) {
    lng = acceptLanguage.get(req.cookies.get(cookieName)!.value);
  }
  if (!lng) lng = fallbackLng;

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
    );
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer")!);
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`),
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
