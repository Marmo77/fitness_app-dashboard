import LoginForm from "@/components/auth/login-form"
import { OAuthButton } from "@/components/auth/oauth-button"
import { Separator } from "@/components/ui/separator"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function LoginPage() {

    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()

    if (data.user) {
        redirect('/')
    }
    // IN FUTURE: if user is logged in, add toast notification "Jesteś już zalogowany/a" and redirect to dashboard !


    return (
        <main className="min-h-screen bg-background flex items-center justify-center px-6">
            <section className="w-full max-w-md rounded-2xl border bg-card p-6 shadow-sm">
                <div className="mb-2 space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">Zaloguj się</h1>
                    <p className="text-sm text-muted-foreground">Kontynuuj przez Google lub Email</p>
                </div>
                <div className="flex flex-col gap-4">
                    <LoginForm />
                    <div className="relative">
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-0.25 text-foreground/40 text-xs">OR</span>
                        <Separator />
                    </div>
                    <OAuthButton />
                </div>
            </section>
        </main>
    )
}