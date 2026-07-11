// async functions for Dashboard

import { orderMockup } from "@/lib/data/orders";

// 1. Newest 8 orders



export const GetLastOrders = () => {

    orderMockup.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    const SlicedOrders = orderMockup.slice(0, 8)

    return SlicedOrders
}



// 2. Administrator list



// 3. KPI Cards -> all time, month, week, day