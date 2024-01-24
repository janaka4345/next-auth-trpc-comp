'use server'

import { loginSchema } from "@/lib/schemas";

export async function server() {
    console.log('hi from server');

}

export async function login(payload) {
    const ValidatedFields = loginSchema.safeParse(payload)
    if (!ValidatedFields.success) {
        return { error: "Invalid fields" }
    }
    return { status: "success" }
    // make it return Response.json with next  js check

}