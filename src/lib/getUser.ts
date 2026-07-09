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
