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


// Get user Statistics

export type UserStatistics = {
    createdAt: string;
    provider: string;
    carsAdded: number;
    lastActive: string;
}
export async function getUserStatistics(): Promise<UserStatistics | null> {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return null;
    }

    const { count: carsAdded, error } = await supabase
        .from("cars")
        .select("*", { count: "exact", head: true })
        .eq("added_by", user.email);

    if (error) {
        console.log(error)
    }
    const createdAtDate = new Date(user.created_at);
    const lastActiveDate = user.last_sign_in_at ? new Date(user.last_sign_in_at) : createdAtDate;

    const data: UserStatistics = {
        createdAt: createdAtDate.toLocaleDateString(),
        provider: user.app_metadata.provider || "unknown",
        carsAdded: carsAdded || 0,
        lastActive: lastActiveDate.toLocaleDateString(),
    }

    return data;

}