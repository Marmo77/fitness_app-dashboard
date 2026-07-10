import Navbar from "@/components/layout/Navbar";
import { getUserProfileDB, UserProfilType } from "@/lib/getUserData";


export default async function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user: UserProfilType | null = await getUserProfileDB()

    return (
        <>
            {/* Data przekazane do nawigacji */}
            <Navbar user={user} />
            <div className="flex-1 flex flex-col">
                {children}
            </div>
        </>
    );
}