import { CalendarDays, CarFront, Fingerprint, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getUserStatistics, type UserStatistics } from "@/lib/getUserData";

export default async function UserStatus() {
    // Te dane ostatecznie pobierzesz z Supabase (np. await supabase.auth.getUser() i zapytania do tabel)
    const userStatistics: UserStatistics | null = await getUserStatistics();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">

            {/* Karta 1: Z nami od */}
            <Card className="bg-card border-border shadow-sm">
                <CardContent className="p-6 flex flex-row items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                        <CalendarDays className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium text-muted-foreground">Z nami od</p>
                        <p className="text-lg font-semibold text-foreground tracking-tight">
                            {userStatistics?.createdAt}
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Karta 2: Metoda logowania */}
            <Card className="bg-card border-border shadow-sm">
                <CardContent className="p-6 flex flex-row items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                        <Fingerprint className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium text-muted-foreground">Logowanie</p>
                        <p className="text-lg font-semibold text-foreground tracking-tight capitalize">
                            {userStatistics?.provider}
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Karta 3: Dodane pojazdy */}
            <Card className="bg-card border-border shadow-sm">
                <CardContent className="p-6 flex flex-row items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                        <CarFront className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium text-muted-foreground">Dodane auta</p>
                        <p className="text-lg font-semibold text-foreground tracking-tight">
                            {userStatistics?.carsAdded}
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Karta 4: Ostatnia aktywność */}
            <Card className="bg-card border-border shadow-sm">
                <CardContent className="p-6 flex flex-row items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                        <Activity className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium text-muted-foreground">Ostatnia Aktywność</p>
                        <p className="text-lg font-semibold text-foreground tracking-tight">
                            {userStatistics?.lastActive}
                        </p>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}