"use client"

import HistoryFilters from './HistoryFilters'
import OrderTable from './OrderTables'
import React, { useState } from 'react'

export default function OrdersComponent() {


    const [searchValue, setSearchValue] = useState<string>("")
    const [sortValue, setSortValue] = useState<string>("date")
    const [filterOrder, setFilterOrder] = useState<"asc" | "desc">("asc")

    //zatwierdzone
    const [appliedSearch, setAppliedSearch] = useState<string>("");
    const [appliedSort, setAppliedSort] = useState<string>("date");
    const [appliedOrder, setAppliedOrder] = useState<"asc" | "desc">("asc");

    // handle do onclicka
    const handleApplyFilters = () => {
        setAppliedSearch(searchValue);
        setAppliedSort(sortValue);
        setAppliedOrder(filterOrder);
    };

    return (
        <div className='flex gap-2 flex-col'>
            <div className='space-y-1'>
                <h3 className='text-[15px] text-muted-foreground font-medium pl-2'>Filtruj:</h3>
                <HistoryFilters searchValue={searchValue} setSearchValue={setSearchValue} sortValue={sortValue} setSortValue={setSortValue} filterOrder={filterOrder} setFilterOrder={setFilterOrder} handleApplyFilter={handleApplyFilters} />
            </div>
            <OrderTable searchValue={appliedSearch} sortValue={appliedSort} filterOrder={appliedOrder} />
        </div>
    )
}
