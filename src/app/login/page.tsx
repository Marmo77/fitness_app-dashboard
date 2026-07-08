import { OAuthButtons } from "@/components/auth/oauth-buttons"

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-background flex items-center justify-center px-6">
            <section className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-sm">
                <div className="mb-6 space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Zaloguj się
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Kontynuuj przez Google lub GitHub
                    </p>
                </div>

                <OAuthButtons />
            </section>
        </main>
    )
}