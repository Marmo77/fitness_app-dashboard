import { LogoutButton } from '@/components/auth/logout-button'
import AccessSettings from '@/components/profil/AccessSettings';
import UserStatus from '@/components/profil/UserStatus';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { getUserProfile } from '@/lib/getUser'




const ProfilPage = async () => {
    const userProfile = await getUserProfile();

    const displayName = userProfile?.displayName || userProfile?.email?.split("@")[0] || "Użytkownik";
    const avatarUrl = userProfile?.avatar_url || null;
    const initial = displayName.charAt(0).toUpperCase();
    return (
        <main className="flex-1 relative flex-col p-6 gap-4 container mx-auto py-32 px-32">
            {/* User Profile Card */}
            <section className='w-full flex gap-4'>
                <Avatar className='h-16 w-16'>
                    <AvatarImage src={avatarUrl || ""} alt={displayName || ""} />
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                        {initial}
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold text-2xl">{displayName}</h1>
                    <h2 className="text-sm text-muted-foreground">{userProfile?.email}</h2>
                </div>
                <div className='ml-auto flex items-center'>
                    <LogoutButton />
                </div>
            </section>
            <Separator className={"w-full mt-4"} />

            {/* User Stats & Acess Settings*/}
            <div className='flex-1 flex gap-12 mt-6 px-2'>
                {/* User Stats */}
                <UserStatus />

                {/* Acess Settings */}
                <section className='flex-1 bg-card p-4'>
                    <AccessSettings user_email={userProfile?.email || ""} />
                </section>
            </div>

        </main>
    )
}

export default ProfilPage