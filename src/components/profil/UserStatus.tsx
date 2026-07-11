import { CalendarDays, CarFront, Fingerprint, Activity, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getUserStatistics, type UserStats } from "@/lib/getUserData";



export default async function UserStatus() {
    // Te dane ostatecznie pobierzesz z Supabase (np. await supabase.auth.getUser() i zapytania do tabel)
    const userStatistics: UserStats | null = await getUserStatistics();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">

            {/* Karta 1: Status */}
            <Card className={`bg-card hover:shadow-lg duration-300 shadow-sm ${userStatistics?.status === "Admin" ? "ring-2 shadow-red-400/50 ring-red-400/50" : "border-border"}`}>
                <CardContent className="p-6 flex flex-row items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                        <User className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium text-muted-foreground">Status</p>
                        <p className={`${userStatistics?.status === "Admin" ? "text-primary" : "text-red-500"} text-lg font-semibold text-foreground tracking-tight capitalize`}>
                            {userStatistics?.status}
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Karta 2: Metoda logowania */}
            <Card className="bg-card hover:shadow-lg duration-300 border-border shadow-sm">
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
            <Card className="bg-card hover:shadow-lg duration-300 border-border shadow-sm">
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
            <Card className="bg-card hover:shadow-lg duration-300 border-border shadow-sm">
                <CardContent className="p-6 flex flex-row items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                        <CalendarDays className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium text-muted-foreground">Zarejestrowany:</p>
                        <p className="text-lg font-semibold text-foreground tracking-tight">
                            {userStatistics?.createdAt}
                        </p>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}