"use server";
// Naprawnianie 10.07.2026
// start: 13:04
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { getUserProfileDB } from "./getUserData";


// bool: check if user is admin (grant/not access to "Access settings")

export async function isUserAdmin(): Promise<boolean> {
    const supabase = await createClient();
    const userID = (await supabase.auth.getUser()).data.user?.id;

    if (!userID) {
        return false;
    }
    const { data: admin } = await supabase.from("profiles").select("id, is_admin").eq("id", userID).single();
    console.log(admin)

    if (admin?.id === userID && admin?.is_admin === true) {
        return true;
    }

    return false;
}


// Get list of users(with filters: user/admin/everyone) (even if is not admin anymore)

export interface UserInfoI {
    id: string;
    display_name: string;
    email: string;
    is_admin: boolean;
}

interface IUserFilter {
    filter: "user" | "admin" | "everyone";

}
export async function UsersList(filter: IUserFilter = { filter: "everyone" }): Promise<UserInfoI[] | null> {
    const supabase = await createClient();
    const { data: users } = await supabase.from("profiles").select("id, display_name, email, is_admin");

    if (users) {
        console.log(users)
    }

    if (filter.filter === "user") {
        return users?.filter((user) => user.is_admin === false) || null;
    }
    if (filter.filter === "admin") {
        return users?.filter((user) => user.is_admin === true) || null;
    }

    if (users) {
        return users as UserInfoI[];
    }
    return null;
}


// // Revoke admin status

// export async function RevokeAdmin(email: string) {
//     const user = await getUserProfileDB();
//     const revoked_by = user?.email || "unknown";

//     const supabase = await createClient();
//     const { data: admin } = await supabase.from("Admins").select("*").eq("email", email).single();

//     if (admin) {
//         await supabase.from("Admins").update({
//             is_admin: false,
//             revoked_by: revoked_by,
//             granted_by: null,
//         }).eq("email", email);
//         //refresh zeby zobaczyc zmiane odrazu
//         revalidatePath("/profil");
//         return true;
//     }

//     return false;
// }


// // Grant admin status
// export async function GrantAdmin(email: string) {
//     const user = await getUserData();
//     const granted_by = user?.email || "unknown";

//     const supabase = await createClient();
//     const { data: admin } = await supabase.from("Admins").select("*").eq("email", email).single();

//     if (admin) {
//         await supabase.from("Admins").update({
//             is_admin: true,
//             granted_by: granted_by,
//             revoked_by: null,
//             granted_at: new Date().toISOString(),
//         }).eq("email", email);
//         //refresh zeby zobaczyc zmiane odrazu
//         revalidatePath("/profil");
//         return true;
//     }

//     return false;
// }

// // Add user to Admins list by AdminButton.tsx

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
// }