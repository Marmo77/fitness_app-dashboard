
import Link from "next/link";

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { LogoutButton } from "@/components/auth/logout-button";
import Image from "next/image";
import { FaGithub, FaGoogle } from "react-icons/fa6";



export default async function Home() {

    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    if (error || !data.user) {
        redirect("/login")
    }
    const logged: boolean = data.user !== null

    const UserInfo = {
        name: data.user.user_metadata.name,
        email: data.user.email,
        avatar_url: data.user.user_metadata.avatar_url,
        provider: data.user.app_metadata.provider
    }

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main>
                <h1 className="text-4xl font-bold">Fitness App Dashboard</h1>
                <div className="flex py-24 justify-center">

                    <Link href={"/login"} className="text-blue-500 underline">Zaloguj się</Link>
                </div>

                <div className="">
                    <h1>{logged ? "Jesteś zalogowany" : "Nie jesteś zalogowany"}</h1>
                    {logged && (
                        <>
                            <span>{UserInfo.name}</span>
                            <Image src={UserInfo.avatar_url} alt="Avatar" width={50} height={50} />
                            <p>{UserInfo.email}</p>
                            <LogoutButton />

                        </>
                    )}
                </div>
            </main>
        </div>
    );
}
