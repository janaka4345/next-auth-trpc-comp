// import { getSession } from 'next-auth/react';
// import { NextResponse } from 'next/server'
// import authConfig from "./auth.config"
// import NextAuth from "next-auth"
// export const { auth } = NextAuth(authConfig)

export { default } from "next-auth/middleware"

// This function can be marked `async` if using `await` inside
// export async function middleware(request) {
//     const session = await getSession({ request });
//     if (session) {
//         // return NextResponse.redirect('/empresa/mis-empresas')
//         console.log('session exist', session);
//     }
//     console.log(session);
//     return NextResponse.next()
// }


// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        "/test"
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        // '/((?!api|_next/static|_next/image|favicon.ico).*)',
        // "/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"
    ],
}