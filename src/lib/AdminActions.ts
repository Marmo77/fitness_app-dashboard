"use server";
// Naprawnianie 10.07.2026
// start: 13:04
// end:   13:38
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";


// bool: check if user is admin (grant/not access to "Access settings")
export async function isUserAdmin(): Promise<boolean> {
    const supabase = await createClient();
    const userID = (await supabase.auth.getUser()).data.user?.id;

    if (!userID) {
        return false;
    }
    const { data: admin } = await supabase.from("profiles").select("id, is_admin").eq("id", userID).single();
    // console.log(admin)

    if (admin?.id === userID && admin?.is_admin === true) {
        return true;
    }

    return false;
}
//-------------------------
// Get list of users(with filters: user/admin/everyone) (even if is not admin anymore)
export interface UserInfoI {
    id: string;
    display_name: string;
    email: string;
    is_admin: boolean;
}
export interface IUserFilter {
    filter: "user" | "admin" | "everyone";

}
export async function UsersList(filter: IUserFilter = { filter: "everyone" }): Promise<UserInfoI[] | null> {
    const supabase = await createClient();

    if (filter.filter === "user") {
        const { data: users } = await supabase.from("profiles").select("id, display_name, email, is_admin").eq("is_admin", false).limit(8);
        return users as UserInfoI[] || null;
    }
    if (filter.filter === "admin") {
        const { data: users } = await supabase.from("profiles").select("id, display_name, email, is_admin").eq("is_admin", true).limit(8);
        return users as UserInfoI[] || null;
    }
    const { data: users } = await supabase.from("profiles").select("id, display_name, email, is_admin").limit(8);

    if (users) {
        return users as UserInfoI[];
    }
    return null;
}
//---------------------------
// Grant/Revoke admin status (option: "grant" | "revoke", is_admin: false/true)

export interface GrantRevokeOption {
    option: "grant" | "revoke";
}
export async function GrantRevokeAdmin(id: string, option: GrantRevokeOption) {
    const supabase = await createClient();
    const { data: admin, error: adminError } = await supabase.from("profiles").select("*").eq("id", id).single();

    if (adminError) {
        console.error("Error fetching admin:", adminError.message);
        return false;
    }

    // jeśli znaleziono admina w bazie (to przyznaj/zabierz -> zależnie od opcjiFunkcji)
    if (admin) {
        await supabase.from("profiles").update({
            is_admin: option.option === "grant" ? true : false
        }).eq("id", id);
        //refresh zeby zobaczyc zmiane odrazu
        revalidatePath("/profil");
        return true;
    }

    return false;
}

//  !Now its not necessary because profiles is main table, not separate table "Admins" !
// export async function AddUserToAdmins(email: string) {
//     const user = await getUserData();
//     const granted_by = user?.email || "unknown";

//     const supabase = await createClient();
//     const { data: admin } = await supabase.from("Admins").select("*").eq("email", email).single();

//     // if admin is not in list, add him
//     if (!admin) {
//         await supabase.from("Admins").insert({
//             email: email,
//             is_admin: true,
//             granted_by: granted_by,
//             revoked_by: null,
//             granted_at: new Date().toISOString(),
//         });
//         //refresh zeby zobaczyc zmiane odrazu
//         revalidatePath("/profil");
//         return true;
//     }

//     // if admin is in list, do nothing (prevent adding same admin twice)
//     return false;
// }
// // Delete from Admins Panel (btn)
// export async function DeleteAdmin(email: string) {
//     const supabase = await createClient();
//     const { data: admin } = await supabase.from("Admins").select("*").eq("email", email).single();

//     if (admin) {
//         await supabase.from("Admins").delete().eq("email", email);
//         //refresh zeby zobaczyc zmiane odrazu
//         revalidatePath("/profil");
//         return true;
//     }

//     return false;


