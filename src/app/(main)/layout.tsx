import Navbar from "@/components/layout/Navbar";
import { getUserData } from "@/lib/getUserData";
import { User } from "@supabase/supabase-js";

export default async function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user: User | null = await getUserData()

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