import LoginBackground from "@/components/auth/login-background"
import LoginForm from "@/components/auth/login-form"
import { OAuthButton } from "@/components/auth/oauth-button"
import { Separator } from "@/components/ui/separator"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { company } from "@/lib/constants"

export default async function LoginPage() {

    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()

    if (data.user) {
        redirect('/')
    }

    const [companyFront, companyBack] = company.name.split(" ")

    // IN FUTURE: if user is logged in, add toast notification "Jesteś już zalogowany/a" and redirect to dashboard !

    return (
        <main className="min-h-screen bg-background relative flex items-center justify-center px-6">

            {/* Warstwy tła: DotGrid (z-0) + Orb (z-10) */}
            <LoginBackground />
            {/* Warstwa 3 (najwyżej): panel logowania */}
            <section className="relative z-30 w-full max-w-md rounded-3xl border bg-card/50 backdrop-blur-sm p-6 shadow-sm">
                <div className="mb-2 space-y-2 text-center">
                    <p className="text-5xl font-bold"><span className="text-primary">{companyFront}</span><span className="text-secondary">{companyBack}</span></p>
                    <h4 className="text-muted-foreground -mt-2">Dashboard</h4>
                    <h1 className="text-2xl font-semibold tracking-tight">Zaloguj się</h1>
                    <p className="text-sm text-muted-foreground">Kontynuuj przez Google lub Email</p>
                </div>
                <div className="flex flex-col gap-4">
                    <LoginForm />
                    <div className="relative">
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/80 px-2 text-foreground/40 text-xs">OR</span>
                        <Separator />
                    </div>
                    <OAuthButton />
                </div>
            </section>

        </main>
    )
}


// marek@test.pl
// Polska123