"use server";

import { createClient } from "@/lib/supabase/server";
import { getUserData } from "./getUser";
import { revalidatePath } from "next/cache";

export type AdminInformation = {
    id: string;
    email: string;
    given_by: string | null;
    given_at: string | null;
    is_admin: boolean;
}


// bool: check if user is admin (grant/not access to "Access settings")

export async function isUserAdmin(): Promise<boolean> {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return false;
    }
    const verifyEmail = user.email?.toLowerCase();


    const { data: admin } = await supabase.from("Admins").select("email").eq("email", verifyEmail).single();

    if (admin?.email === verifyEmail) {
        return true;
    }

    return false;
}


// Get list of admins (even if is not admin anymore)

export async function AdminsList(): Promise<AdminInformation[] | null> {
    const supabase = await createClient();
    const { data: admin } = await supabase.from("Admins").select("*").eq("is_admin", true);

    if (admin) {
        return admin as AdminInformation[];
    }
    return null;
}


// Revoke admin status

export async function RevokeAdmin(email: string) {
    const user = await getUserData();
    const revoked_by = user?.email || "unknown";

    const supabase = await createClient();
    const { data: admin } = await supabase.from("Admins").select("*").eq("email", email).single();

    if (admin) {
        await supabase.from("Admins").update({
            is_admin: !admin.is_admin,
            revoked_by: revoked_by,
        }).eq("email", email);
        //refresh zeby zobaczyc zmiane odrazu
        revalidatePath("/profil");
        return true;
    }

    return false;
}