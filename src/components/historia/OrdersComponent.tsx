"use client"

import { useState, useTransition } from 'react'
import HistoryFilters from './HistoryFilters'
import OrderTable from './OrderTables'
import { type OrderProps } from '@/lib/data/orders'
import { getSortedOrders } from '@/lib/data/orders'

export default function OrdersComponent({ initialOrders }: { initialOrders: OrderProps[] }) {
    const [displayOrders, setDisplayOrders] = useState<OrderProps[]>(initialOrders);

    const [isPending, startTransition] = useTransition();

    const [searchValue, setSearchValue] = useState<string>("");
    const [sortValue, setSortValue] = useState<string>("date");
    const [filterOrder, setFilterOrder] = useState<"asc" | "desc">("desc");

    const handleApplyFilters = () => {
        startTransition(async () => {
            let newOrders = await getSortedOrders(sortValue, filterOrder);

            if (searchValue) {
                const search = searchValue.toLowerCase();
                newOrders = newOrders.filter(order =>
                    order.customerEmail.toLowerCase().includes(search) ||
                    order.customerName.toLowerCase().includes(search) ||
                    order.date.toLowerCase().includes(search) ||
                    order.id.toString().includes(search) ||
                    order.serviceName.toLowerCase().includes(search) ||
                    order.serviceType.toLowerCase().includes(search) ||
                    order.status.toLowerCase().includes(search) ||
                    (order.customerPhone && order.customerPhone.toLowerCase().includes(search))
                );
            }

            setDisplayOrders(newOrders);
        });
    };
    const handleResetFilters = () => {
        setSearchValue("");
        setSortValue("date");
        setFilterOrder("desc");

        startTransition(async () => {
            const resetOrders = await getSortedOrders("date", "desc");
            setDisplayOrders(resetOrders);
        });
    };

    return (
        <div className='flex gap-2 flex-col'>
            <div className='space-y-1 w-full'>
                <div className='flex items-center justify-center w-full'>
                    {/* Opcjonalnie: Możesz przekazać isPending do HistoryFilters, 
                        aby np. zablokować przyciski w trakcie ładowania (disabled={isPending}) */}
                    <HistoryFilters
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        sortValue={sortValue}
                        setSortValue={setSortValue}
                        filterOrder={filterOrder}
                        setFilterOrder={setFilterOrder}
                        handleApplyFilter={handleApplyFilters}
                        handleResetFilters={handleResetFilters}
                    />
                </div>
            </div>
            {/* Przekazujemy stan displayOrders do tabeli, a opcjonalnie nakładamy efekt przezroczystości podczas ładowania */}
            <div className={isPending ? "opacity-50 pointer-events-none transition-opacity" : "transition-opacity"}>
                <OrderTable orders={displayOrders} />
            </div>
        </div>
    )
}