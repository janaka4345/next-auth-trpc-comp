'use server'

import prisma from "@/lib/prismaClient";
import { createUserSchema, loginSchema } from "@/lib/schemas";
import bcrypt from 'bcrypt'

export async function server() {
    console.log('hi from server');

}

export async function login(payload) {
    const ValidatedFields = loginSchema.safeParse(payload)

    if (!ValidatedFields.success) {
        return { error: "Invalid Credentials" }
    }
    return { status: "Email Sent!" }


    // make it return Response.json with next  js check

}

export async function createUser(payload) {
    console.log(payload);
    const ValidatedFields = createUserSchema.safeParse(payload)
    if (!ValidatedFields.success) {
        return { error: "Invalid Credentials" }
    }

    const { name, email, password } = ValidatedFields.data

    const hashedPassword = await bcrypt.hash(password, 10)

    const existingUser = await prisma.user.findUnique({
        where: { email }//TODO add this as a util file 
    })

    if (existingUser) {
        return { error: "User with that Email Exist" }
    }

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    })
    //TODO  send verification token later
    return { status: "User Created!" }


    // make it return Response.json with next  js check

}