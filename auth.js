import NextAuth from "next-auth"
import authConfig from "./auth.config"
import prisma from "./lib/prismaClient"
import { PrismaAdapter } from "@auth/prisma-adapter"

export const { handlers: { GET, POST }, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },//necesary only on edge
    ...authConfig,
})