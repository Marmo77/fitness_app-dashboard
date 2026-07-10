import { LogoutButton } from '@/components/auth/logout-button'
import AccessFilteringButton from '@/components/profil/access-filter-btn';
import AccessSettings from '@/components/profil/AccessSettings';
import EditProfilBtn from '@/components/profil/edit-profil-btn';
import UserStatus from '@/components/profil/UserStatus';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { isUserAdmin } from '@/lib/AdminActions';
import { getUserProfileDB, UserProfilType } from '@/lib/getUserData'


interface ProfilPageProps {
    searchParams: { [key: string]: string | undefined };
}

const ProfilPage = async ({ searchParams }: ProfilPageProps) => {
    const userProfil: UserProfilType | null = await getUserProfileDB();
    const isAdmin = await isUserAdmin();
    const userId = userProfil?.id || null;

    const displayName = userProfil?.display_name || "Użytkownik"; // userProfil?.display_name || 
    const avatarUrl = userProfil?.avatar_url || null;
    const initial = displayName?.charAt(0).toUpperCase();

    // udczytywanie filtru i przekazywanie go do komponentu
    const { filter } = await searchParams;
    const currentFilter = (filter as "everyone" | "admin" | "user") || "everyone";




    return (
        <main className="flex-1 container max-w-7xl mx-auto py-8 px-4 md:py-12 lg:px-8 flex flex-col gap-8">

            {/* Karta użytkownika */}
            <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 rounded-2xl bg-card border border-border shadow-sm">
                <div className="flex items-center gap-5">
                    <Avatar className="h-16 w-16 border-2 border-background shadow-sm ring-1 ring-border">
                        <AvatarImage src={avatarUrl || ""} alt={displayName || ""} />
                        <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                            {initial}
                        </AvatarFallback>
                    </Avatar>
                    {/* Nick + Email */}
                    <div className="flex flex-col gap-0.5">
                        <h1 className="font-semibold text-2xl tracking-tight text-foreground">
                            {displayName}
                        </h1>
                        <h2 className="text-sm text-muted-foreground">
                            {userProfil?.email}
                        </h2>
                    </div>
                    {/* Edit button */}
                    <EditProfilBtn />
                </div>
                <div className="w-full sm:w-auto flex justify-end">
                    <LogoutButton />
                </div>
            </section>

            {/* Statystyki Użytkownika*/}
            <section className="w-full">
                <UserStatus />
            </section>

            {/* Ustawienia Dostępu */}
            <section className="w-full flex flex-col rounded-2xl bg-card border border-border shadow-sm">
                <div className='flex items-start justify-start px-6 pt-6 pb-2 flex-col gap-2'>

                    <div className="">
                        <h2 className="text-lg font-semibold tracking-tight text-foreground">Ustawienia dostępu</h2>
                        <p className="text-sm text-muted-foreground mt-1">Zarządzaj swoimi uprawnieniami i rolami w systemie.</p>
                    </div>
                    {isAdmin && (
                        <div className='flex flex-col gap-0.5'>
                            <span className="text-sm text-muted-foreground mt-1">Filtruj:</span>
                            <div className='flex gap-0.5'>
                                <AccessFilteringButton filter_choice={{ filter: "everyone" }} current_filter={currentFilter} />
                                <AccessFilteringButton filter_choice={{ filter: "admin" }} current_filter={currentFilter} />
                                <AccessFilteringButton filter_choice={{ filter: "user" }} current_filter={currentFilter} />
                                {/* <Button className={`bg-primary hover:bg-primary/80 px-7 ${!isActiveFilter ? "bg-primary" : "bg-primary/50"}`} ><FaUserGroup /></Button>
                                <Button className={`bg-primary hover:bg-primary/80 px-6 ${isActiveFilter ? "bg-primary" : "bg-primary/50"}`} ><Crown /></Button>
                                <Button className={`bg-primary hover:bg-primary/80 px-6 ${!isActiveFilter ? "bg-primary" : "bg-primary/50"}`} ><User2 /></Button> */}
                            </div>
                        </div>
                    )}
                </div>

                <Separator className="w-full" />

                <div className="p-0 sm:p-6 bg-background/50 overflow-x-auto rounded-b-2xl">
                    <div className="min-w-[600px] p-4 sm:p-0">
                        <AccessSettings user_id={userId} filter_choice={{ filter: currentFilter }} />
                    </div>
                </div>
            </section>

        </main>
    )
}

export default ProfilPage