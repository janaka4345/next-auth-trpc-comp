import { auth } from "./auth"

export default auth((req) => {
    // req.auth
    const isLogedin = !!req.auth
    console.log('route-', req.nextUrl.pathname, '-', isLogedin);

})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}