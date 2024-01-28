import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { loginSchema } from "./lib/schemas"
import prisma from "./lib/prismaClient"
import bcrypt from 'bcryptjs'
export default {
    providers: [Credentials({

        credentials: {
            email: { label: "email" },
            password: { label: "password", type: "password" },
        },
        async authorize(credentials) {
            console.log('**********************************');
            console.log(credentials);
            const validateData = loginSchema.safeParse(credentials)
            console.log(validateData);
            console.log('**********************************');

            if (validateData.success) {
                const { email, password } = validateData.data
                const user = await prisma.user.findUnique({
                    where: { email }//TODO add this as a util file 
                })
                console.log(user);
                console.log('**********************************');
                if (!user || !user.password) {
                    return { error: 'No User Found' }
                }
                const passwordMatch = await bcrypt.compare(password, user.password)
                if (passwordMatch) {
                    return user
                }
                return { error: 'autorized failed message' }
            }
        }

        // },
        // async authorize({ request }) {
        //     const response = await fetch(request)
        //     if (!response.ok) return null
        //     return await response.json() ?? null
        // }
    }), GitHub],
    pages: {
        // signIn: 'auth2/signin',
        // signOut: 'auth2/signout',
        // signIn: 'auth3/signin',
        // signOut: 'auth3/signout',
        // error: '/auth2/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth2/verify-request', // (used for check email message)
        // newUser: 'auth2/createaccount' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
} 