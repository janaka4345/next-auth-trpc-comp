import authConfig from "./auth.config"
import NextAuth from "next-auth"
import {
    LOGIN_REDIRECT,
    authPrefix,
    authRoutes,
    publicRoutes,
    trpcPrefix
} from '@/allRoutes'
export const { auth } = NextAuth(authConfig)


export default auth((req) => {
    const { nextUrl } = req
    const isLogedin = !!req.auth
    console.log('route-', nextUrl.pathname);

    console.log(isLogedin);

    const isApiRoutes = nextUrl.pathname.startsWith(authPrefix)
    const istrpcRoutes = nextUrl.pathname.startsWith(trpcPrefix)
    const isPublicRoutes = publicRoutes.includes(nextUrl.pathname)
    const isAuthRoutes = authRoutes.includes(nextUrl.pathname)
    console.log('auth', isApiRoutes);

    if (isAuthRoutes) {
        if (isLogedin) {
            return Response.redirect(new URL(LOGIN_REDIRECT, nextUrl))
        }
        return null
    }

    if (isApiRoutes || istrpcRoutes) {

        return null
    }
    if (istrpcRoutes) {

        return null
    }




    if (!isLogedin && !isPublicRoutes) {
        return Response.redirect(new URL('api/auth/signin', nextUrl))
    }
    return null

    // console.log('route-', req.nextUrl.pathname, '-', isLogedin);

})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],

}