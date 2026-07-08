"use client"

import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export function LogoutButton() {
    const router = useRouter()

    const handleLogout = async () => {
        const supabase = createClient()
        await supabase.auth.signOut()
        router.push("/login")
        router.refresh()
    }

    return (
        <Button type="button" variant="secondary" className={"text-primary border-none"} size={"lg"} onClick={handleLogout}>
            Wyloguj się
        </Button>
    )
}