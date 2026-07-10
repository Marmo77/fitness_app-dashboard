"use client"

import HistoryFilters from './HistoryFilters'
import OrderTable from './OrderTables'
import React, { useState } from 'react'

export default function OrdersComponent() {


    const [searchValue, setSearchValue] = useState<string>("")
    const [sortValue, setSortValue] = useState<string>("date")
    const [filterOrder, setFilterOrder] = useState<string>("asc")

    return (
        <div className='flex gap-2 flex-col'>
            <div className='space-y-1'>
                <h3 className='text-[15px] text-muted-foreground font-medium pl-2'>Filtruj:</h3>
                <HistoryFilters searchValue={searchValue} setSearchValue={setSearchValue} sortValue={sortValue} setSortValue={setSortValue} filterOrder={filterOrder} setFilterOrder={setFilterOrder} />
            </div>
            <OrderTable />
        </div>
    )
}
