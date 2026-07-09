"use client"

import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import { Provider } from "@supabase/supabase-js"
import { FaGoogle } from "react-icons/fa6"

export function OAuthButton() {
    const supabase = createClient()

    const signInWithProvider = async (provider: Provider) => {
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
                <FaGoogle className="mr-1 h-4 w-4" />
                Zaloguj się przez Google
            </Button>
        </div>
    )
}