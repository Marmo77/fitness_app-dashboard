// async functions for Dashboard

import { orderMockup } from "@/lib/data/orders";

// 1. Newest 10 orders



const Last10Orders = () => {

    orderMockup.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    const SlicedOrders = orderMockup.slice(0, 10)

    return SlicedOrders
}

export const Test = () => {

    console.log(Last10Orders)
}



// 2. Administrator list



// 3. KPI Cards -> all time, month, week, day