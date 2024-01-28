import z from 'zod'

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, { message: 'Password is Required' }),
    remember: z.boolean().optional()
})
export const createUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters long  " }),
    confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters long  " }),
    terms: z.boolean().refine(val => val === true, { message: 'Must accept Terms and Conditions' })
})