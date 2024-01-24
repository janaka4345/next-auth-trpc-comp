import z from 'zod'

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})
export const createUser = z.object({
    email: z.string().email(),
    password: z.string(8, { message: "Password must be at least 8 characters long  " }),
    confirmPassword: z.string(8, { message: "Password must be at least 8 characters long  " })
})