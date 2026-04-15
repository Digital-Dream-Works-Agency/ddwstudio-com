// middleware.ts — next-intl Middleware for locale detection and routing
// This middleware intercepts every request and:
// 1. Detects the user's preferred locale (from URL, cookie, or browser Accept-Language header)
// 2. Redirects to the correct locale URL if needed (e.g., /it/ for Italian users)
// 3. Sets the x-next-intl-locale header so server components can read the locale
//
// The 'matcher' config below ensures this middleware ONLY runs on page routes,
// NOT on API routes, static files, or Next.js internal routes.

import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    const host = request.headers.get('host') || '';
    const pathname = request.nextUrl.pathname;

    // Handle ddwstudio.it domain — always serve Italian content
    if (host.includes('ddwstudio.it')) {
        // If someone visits ddwstudio.it/it or ddwstudio.it/it/something,
        // redirect to ddwstudio.it/ or ddwstudio.it/something (strip /it prefix)
        if (pathname === '/it' || pathname.startsWith('/it/')) {
            const cleanPath = pathname.replace(/^\/it/, '') || '/';
            const url = request.nextUrl.clone();
            url.pathname = cleanPath;
            return NextResponse.redirect(url);
        }

        // For all other paths on ddwstudio.it, internally rewrite to /it/...
        // so Next.js serves the Italian [locale] content without a visible redirect
        const url = request.nextUrl.clone();
        url.pathname = `/it${pathname}`;
        return NextResponse.rewrite(url);
    }

    return intlMiddleware(request);
}

export const config = {
    // Match all pathnames EXCEPT:
    // - /api/* — API routes should not be locale-prefixed
    // - /trpc/* — tRPC routes (if used)
    // - /_next/* — Next.js internal routes (static files, HMR, etc.)
    // - /_vercel/* — Vercel internal routes
    // - Files with dots in the name (e.g., favicon.ico, robots.txt, images)
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
