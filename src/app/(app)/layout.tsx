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

    const currentUser = {
        name: user.user_metadata?.name || user.user_metadata?.full_name || "User",
        email: user.email || "",
        avatar: user.user_metadata?.avatar_url || "",
    }

    return (
        <SidebarProvider defaultOpen>
            <AppSidebar user={currentUser} />

            <SidebarInset className="min-w-0">
                <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur">
                    <SidebarTrigger />
                    <div>
                        <h1 className="text-sm font-medium text-muted-foreground">
                            Fitness Dashboard
                        </h1>
                    </div>
                </header>

                <main className="flex-1 p-4 md:p-6">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    )
}