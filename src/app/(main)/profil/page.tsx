import { LogoutButton } from '@/components/auth/logout-button'
import AccessSettings from '@/components/profil/AccessSettings';
import EditProfilBtn from '@/components/profil/edit-profil-btn';
import ProfilesDBTest from '@/components/profil/profiles-db-test';
import UserStatus from '@/components/profil/UserStatus';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { getUserProfileDB, UserProfilType } from '@/lib/getUserData'




const ProfilPage = async () => {
    const userProfil: UserProfilType | null = await getUserProfileDB();

    const userId = userProfil?.id || null;

    const displayName = userProfil?.display_name || "Użytkownik"; // userProfil?.display_name || 
    const avatarUrl = userProfil?.avatar_url || null;
    const initial = displayName?.charAt(0).toUpperCase();
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
            <div>
                <ProfilesDBTest />
            </div>

            {/* Ustawienia Dostępu */}
            <section className="w-full flex flex-col rounded-2xl bg-card border border-border shadow-sm">
                <div className='flex justify-between'>

                    <div className="p-6 pb-4">
                        <h2 className="text-lg font-semibold tracking-tight text-foreground">Ustawienia dostępu</h2>
                        <p className="text-sm text-muted-foreground mt-1">Zarządzaj swoimi uprawnieniami i rolami w systemie.</p>
                    </div>
                    <div className='self-center mr-6'>
                        {/* <AddAdmin /> */}
                    </div>
                </div>

                <Separator className="w-full" />

                <div className="p-0 sm:p-6 bg-background/50 overflow-x-auto rounded-b-2xl">
                    <div className="min-w-[600px] p-4 sm:p-0">
                        <AccessSettings user_id={userId} />
                    </div>
                </div>
            </section>

        </main>
    )
}

export default ProfilPage