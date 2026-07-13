// async functions for Dashboard
"use server";
import { createClient } from "./supabase/server";


// 2. Administrator list

export interface IAdminList {
    id: string;
    display_name: string;
    email: string;
    created_at: string;
}

export const GetAdminsList = async (): Promise<IAdminList[]> => {
    const supabase = await createClient();
    const { data: admins, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('is_admin', true)

    if (error) {
        throw error
    }
    return admins
}
