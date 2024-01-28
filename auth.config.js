import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { loginSchema } from "./lib/schemas"
import prisma from "./lib/prismaClient"
import bcrypt from 'bcryptjs'
export default {
    providers: [Credentials({

        credentials: {
            username: { label: "Username" },
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
            const validateData = loginSchema.safeParse(credentials)
            if (validateData.success) {
                const { email, password } = validateData.data
                const user = await prisma.user.findUnique({
                    where: { email }//TODO add this as a util file 
                })
                if (!user || !user.password) {
                    return null
                }
                const passwordMatch = await bcrypt.compare(password, user.password)
                if (passwordMatch) {
                    return user
                }
                return null
            }

        },
        // async authorize({ request }) {
        //     const response = await fetch(request)
        //     if (!response.ok) return null
        //     return await response.json() ?? null
        // }
    }), GitHub],
} 