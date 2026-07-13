"use server"

import { revalidatePath } from "next/cache";
import { createClient } from "./supabase/server";



// Get user profil from "profiles" table
// This is the main function to get user profile from DB
export type UserProfilType = {
    id: string;
    display_name: string;
    email: string;
    avatar_url: string;
    provider: string;
    created_at: string;
    is_admin: boolean;
}
export async function getUserProfileDB(): Promise<UserProfilType | null> {

    const supabase = await createClient();

    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
        console.error("Error:", userError);
        return null;
    }

    const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle();

    if (error) {
        console.error("DB error:", error);
        return null;
    }
    if (!data) {
        console.error("No data from DB query");
        return null;
    }

    const userProfile: UserProfilType = {
        id: data.id,
        email: data.email,
        display_name: data.display_name || "Użytkownik",
        avatar_url: data.avatar_url,
        provider: data.provider,
        created_at: data.created_at,
        is_admin: data.is_admin,
    }
    return userProfile;
}
//----------------------------------
// Get user Statistics (/profil)
export type UserStats = {
    status: string;
    createdAt: string;
    provider: string;
    carsAdded: number;
}
export async function getUserStatistics(): Promise<UserStats | null> {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return null;
    }

    const { count: carsAdded, error } = await supabase
        .from("cars")
        .select("*", { count: "exact", head: true })
        .eq("added_by", user.id);

    if (error) {
        console.error("Error counting cars:", error)
    }
    const createdAtDate = new Date(user.created_at);

    const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle();

    const is_admin = profile?.is_admin || false;

    const data: UserStats = {
        status: is_admin ? "Admin" : "User",
        createdAt: createdAtDate.toLocaleDateString(),
        provider: user.app_metadata.provider || "unknown",
        carsAdded: carsAdded || 0,
    }

    return data;

}
//------------------------
// User update own profile (edit profil)

export async function updateDisplayName(newName: string): Promise<boolean> {

    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        throw new Error("Brak autoryzacji");
    }

    const { error } = await supabase
        .from("profiles")
        .update({ display_name: newName })
        .eq("id", user.id);

    if (error) {
        console.error("Error updating display name:", error);
        return false;
    }

    revalidatePath('/profil');
    return true;

}


// get stats for Navigation 
export type UserPillType = {
    waiting: number;
    totalUsers: number;
    moneyFromWaitingOrders: number;
}

export const getPillInformations = async () => {
    const supabase = await createClient();


    const waiting = await supabase
        .from("orders")
        .select("*", { count: "exact", head: true })
        .eq("status", "W toku");

    const totalUsers = await supabase
        .from("profiles")
        .select("*", { count: "exact", head: true });

    const moneyFromWaitingOrders = await supabase
        .from("orders")
        .select("price")
        .eq("status", "W toku")

    return {
        waiting: waiting.count || 0,
        totalUsers: totalUsers.count || 0,
        moneyFromWaitingOrders: moneyFromWaitingOrders.data?.reduce((sum, current) => sum + current.price, 0) || 0,
    }

}