"use server"

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

type LoginState = { error: string } | null

export async function loginWithEmail(
    prevState: LoginState,
    formData: FormData
): Promise<LoginState> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = await createClient()

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error) {
        return { error: "Wystąpił błąd! Spróbuj ponownie lub inną metodą" }
    }

    redirect("/")
}