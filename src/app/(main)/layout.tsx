import Navbar from "@/components/layout/Navbar";
import { createClient } from "@/lib/supabase/server";

export default async function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

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