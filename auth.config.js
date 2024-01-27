import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"

export default {
    providers: [Credentials({
        credentials: {
            username: { label: "Username" },
            password: { label: "Password", type: "password" }
        },
        // async authorize({ request }) {
        //     const response = await fetch(request)
        //     if (!response.ok) return null
        //     return await response.json() ?? null
        // }
    }), GitHub],
} 