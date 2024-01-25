'use server'

import { createUserSchema, loginSchema } from "@/lib/schemas";

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
    return { status: "Email Sent!" }


    // make it return Response.json with next  js check

}