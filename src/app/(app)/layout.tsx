import { ReactNode } from "react"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AppSidebar } from "@/components/app/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export default async function AppLayout({
    children,
}: {
    children: ReactNode
}) {
    const supabase = await createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        redirect("/login")
    }

    const User: {
        name: string,
        email: string,
        avatar: string,
    } = {
        name: user.user_metadata.name || "User",
        email: user.email || "",
        avatar: user.user_metadata.avatar_url || "",
    }

    return (
        <SidebarProvider defaultOpen>
            <AppSidebar User={User} />

            <SidebarInset>
                <header className="flex h-16 items-center gap-3 border-b px-4">
                    <SidebarTrigger />
                    <div>
                        <h1 className="text-sm font-medium text-muted-foreground">
                            Fitness Dashboard
                        </h1>
                    </div>
                </header>

                <main className="flex-1 p-6">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    )
}