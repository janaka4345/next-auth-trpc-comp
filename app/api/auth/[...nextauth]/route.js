import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { auth } from "../path-to-config/auth"

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    providers: [GitHub],
})