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


//Orders Statistics for KPI

// Returns:
// - Total Revenue
// - Completed Orders
// - Total Users
// - Total Admins
// - Canceled to Completed Orders (%)

export const getOrdersStatsKPI = async () => {

    const supabase = await createClient();

    const { data: orders, error: orderError } = await supabase.from("orders").select("*");
    const { data: users, error: userError } = await supabase.from("profiles").select("*");

    if (orderError || userError) {
        throw new Error("Failed to fetch orders or users");
    }
    // ORDERS
    const totalRevenue: number = orders?.reduce((sum, current) => sum + current.price, 0) ?? 0; // even for canceled!
    const completedOrders: number = orders?.filter((order) => order.status === "Zrobione").length ?? 0;
    const canceledOrders: number = orders?.filter((order) => order.status === "Anulowane").length ?? 0;
    const ordersToCanceled: number = canceledOrders / completedOrders * 100; // in %
    const revenueForCompletedOrders: number = totalRevenue / completedOrders;
    // USERS
    const totalUsers = users?.length;
    const totalAdmins = users?.filter((user) => user.is_admin == true).length;


    const formatedTotalRevenue = new Intl.NumberFormat('pl-PL', {
        style: "currency",
        currency: "PLN",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    }).format(totalRevenue);
    const formatedRevenueForCompletedOrders = new Intl.NumberFormat('pl-PL', {
        style: "currency",
        currency: "PLN",
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    }).format(revenueForCompletedOrders);
    const formatedOrdersToCanceled = ordersToCanceled.toFixed(1) + "%";

    return {
        order: {
            totalRevenue: formatedTotalRevenue,
            revenueForCompletedOrders: formatedRevenueForCompletedOrders,
            completedOrders: completedOrders,
            ordersToCanceled: formatedOrdersToCanceled,
        },
        users: {
            totalUsers,
            totalAdmins,
        }
        // canceledToCompletedOrders
    }
}