import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'
import { Button } from '../ui/button'
import { MdMap } from 'react-icons/md'
import LastOrdersTable from './lastOrdersTable'

const NewestOrders = () => {
    return (
        <Card>
            <CardHeader className='flex justify-between px-6'>
                <CardTitle className='text-primary text-xl font-extrabold'>Ostatnie zlecenia</CardTitle>
                <Link href="/historia">
                    <Button size="sm" variant="outline" className='flex items-center rounded-lg'>
                        <MdMap className="text-lg mr-1" /> Zobacz wszystkie
                    </Button>
                </Link>
            </CardHeader>
            <CardContent>
                <LastOrdersTable />
            </CardContent>
        </Card>
    )
}

export default NewestOrders