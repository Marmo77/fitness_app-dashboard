"use client"

import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import { FaGithub, FaGoogle } from "react-icons/fa6"

export function OAuthButtons() {
    const supabase = createClient()

    const signInWithProvider = async (provider: "google" | "github") => {
        await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        })
    }

    return (
        <div className="flex flex-col gap-3">
            <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => signInWithProvider("google")}
            >
                <FaGoogle className="mr-2 h-4 w-4" />
                Zaloguj się przez Google
            </Button>

            <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => signInWithProvider("github")}
            >
                <FaGithub className="mr-2 h-4 w-4" />
                Zaloguj się przez GitHub
            </Button>
        </div>
    )
}