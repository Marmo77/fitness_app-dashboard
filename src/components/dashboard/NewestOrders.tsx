import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'
import { Button } from '../ui/button'
import { MdMap } from 'react-icons/md'
import LastOrdersTable from './lastOrdersTable'
import { getNewestOrders } from '@/lib/data/orders'

const NewestOrders = async () => {

    const lastOrders = await getNewestOrders(8);

    const amountOrders = lastOrders.length || 0;

    return (
        <Card>
            <CardHeader className='flex justify-between px-6'>
                <div className="flex gap-0.5">
                    <CardTitle className='text-primary text-xl font-extrabold'>Ostatnie zlecenia</CardTitle>
                    <span className="text-muted-foreground">{amountOrders ? `(${amountOrders})` : ""}</span>
                </div>
                <Link href="/historia">
                    <Button size="sm" variant="outline" className='flex items-center rounded-lg'>
                        <MdMap className="text-lg mr-1" /> Zobacz wszystkie
                    </Button>
                </Link>
            </CardHeader>
            <CardContent>
                <LastOrdersTable orders={lastOrders} />
            </CardContent>
        </Card>
    )
}

export default NewestOrders