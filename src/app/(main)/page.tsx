import { LogoutButton } from "@/components/auth/logout-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const MainPage = () => {
    return (
        <main className="flex-1 relative flex items-center justify-center p-6">
            <div className="flex flex-col items-center justify-center gap-6 max-w-md w-full p-8 border border-border rounded-xl bg-card shadow-sm text-center">
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">
                        Zalogowano pomyślnie!
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        Witaj w panelu Nord Scan. Poniżej znajdziesz dostępne narzędzia.
                    </p>
                </div>

                <div className="flex flex-col w-full gap-3">
                    <Button className="w-full">
                        <Link href="/dashboard">Przejdź do dashboardu</Link>
                    </Button>
                    <div className="w-full">
                        <LogoutButton />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainPage