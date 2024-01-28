'use server'

import { LOGIN_REDIRECT } from "@/allRoutes";
import { signIn } from "@/auth";
import prisma from "@/lib/prismaClient";
import { createUserSchema, loginSchema } from "@/lib/schemas";
import bcrypt from 'bcryptjs'
import { AuthError } from "next-auth";
import { redirect } from "next/dist/server/api-utils";

export async function server() {
    console.log('hi from server');

}

export async function login(payload) {
    const ValidatedFields = loginSchema.safeParse(payload)

    if (!ValidatedFields.success) {
        return { error: "Invalid Credentials" }
    }
    // return { status: "Email Sent!" }
    const { email, password } = ValidatedFields.data
    try {
        signIn('credentials',
            { email, password, redirectTo: LOGIN_REDIRECT },

        )
        return { status: "Email Sent!" }
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin': return { error: "Invalid Credentials" }
                default: return { error: "Something Went Wrong" }
            }

        }
        return { error: "Something Went Wrong" }
    }


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