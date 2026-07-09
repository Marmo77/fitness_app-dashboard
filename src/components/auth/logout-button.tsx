"use client"

import { createClient } from "@/lib/supabase/client"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function LogoutButton() {
    const router = useRouter()
    const [isPending, setIsPending] = useState(false)

    const handleLogout = async () => {
        setIsPending(true)
        const supabase = createClient()
        await supabase.auth.signOut()
        router.push("/login")
        router.refresh()
    }

    return (
        <button
            type="button"
            onClick={handleLogout}
            disabled={isPending}
            className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground border border-border rounded-lg transition-all duration-200 hover:border-destructive/50 hover:text-destructive hover:bg-destructive/5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <LogOut
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
            <span>{isPending ? "Wylogowywanie..." : "Wyloguj się"}</span>
        </button>
    )
}