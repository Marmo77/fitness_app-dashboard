import { createClient } from "./supabase/server";



export async function getUserData() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}

export type UserInformations = {
    id: string;
    displayName: string | null;
    email: string;
    avatar_url: string | null;
    created_at: string;
    CapitalizeName?: string;
}

export async function getUserProfile(): Promise<UserInformations | null> {
    const user = await getUserData();

    if (!user) {
        return null;
    }

    const data: UserInformations = {
        id: user.id,
        displayName: user.user_metadata.name || user.email?.split("@")[0] || "",
        email: user.email || "",
        avatar_url: user.user_metadata.avatar_url || null,
        created_at: user.created_at || "",
    }

    return data;

}


export type AdminInformation = {
    id: string;
    email: string;
    given_by: string | null;
    given_at: string | null;
    is_admin: boolean;
}

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


export async function AdminsList(): Promise<AdminInformation[] | null> {
    const supabase = await createClient();
    const { data: admin } = await supabase.from("Admins").select("*").eq("is_admin", true);

    if (admin) {
        return admin as AdminInformation[];
    }
    return null;
}