import React from 'react'
import { orderMockup, type OrderProps } from './orders'

const OrderTable = () => {
    //Get orders List
    const OrderList: OrderProps[] = orderMockup;
    return (
        <div className="flex flex-col gap-4">
            {OrderList.map((order) => (
                <div className="card" key={order.id}>
                    {order.serviceName}
                    {order.serviceType}
                    {order.customerName}
                    {order.customerEmail}
                    {order.customerPhone}
                    {order.date}
                    {order.status}
                    {order.active}
                </div>
            ))}
        </div>
    )
}

export default OrderTable