"use server"

import { createClient } from "../supabase/server";


export type OrderProps = {
    id: number;
    serviceName: string;
    serviceType: string;
    customerName: string;
    customerEmail: string;
    customerPhone?: string;
    date: string;
    price: number;
    status: "Zrobione" | "W toku" | "Anulowane";
    active?: boolean;
}

export const getOrdersFromDB = async (): Promise<OrderProps[]> => {
    const supabase = await createClient();
    const { data: orders, error } = await supabase.from("orders").select("*");

    if (error) {
        throw error;
    }

    return orders as OrderProps[];
}

// Sort Orders

export const getSortedOrders = async (sortValue: string, filterOrder: "asc" | "desc") => {
    const supabase = await createClient();

    const { data: orders, error } = await supabase
        .from("orders")
        .select("*")
        .order(sortValue, { ascending: filterOrder === "asc" });

    if (error) {
        throw error;
    }

    return orders as OrderProps[];
}