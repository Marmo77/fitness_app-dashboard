import Navbar from "@/components/layout/Navbar";
import { getPillInformations, getUserProfileDB, UserPillType, UserProfilType } from "@/lib/getUserData";


export default async function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user: UserProfilType | null = await getUserProfileDB()
    const pillInfos: UserPillType | null = await getPillInformations();

    return (
        <>
            {/* Data przekazane do nawigacji */}
            <Navbar user={user} pillInfos={pillInfos} />
            <div className="flex-1 flex flex-col">
                {children}
            </div>
        </>
    );
}