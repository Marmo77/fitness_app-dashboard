import { getOrdersFromDB } from "@/lib/data/orders";

// 1. Newest 8 orders
export const GetLastOrders = async () => {
    const orderList = await getOrdersFromDB()
    orderList.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    const SlicedOrders = orderList.slice(0, 8)

    return SlicedOrders
}



// 3. KPI Cards -> all time, month, week, day