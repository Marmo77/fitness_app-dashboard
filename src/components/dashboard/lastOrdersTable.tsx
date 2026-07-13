"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { MdCancel, MdDone, MdOutlineHourglassEmpty } from 'react-icons/md';

import { OrdersHeaderSchema } from '@/lib/data/orderSchema';
import { type OrderProps } from '@/lib/data/orders';
import { handleCopyToClipboard } from '@/lib/functions';

const LastOrdersTable = ({ orders }: { orders: OrderProps[] }) => {


    return (
        <Table>
            <TableHeader>
                <TableRow className='hover:bg-transparent'>
                    {Object.values(OrdersHeaderSchema).map((header) => (
                        <TableHead key={header}>{header}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {orders.map((order) => {
                    const formatedDate = order.date.split("-").reverse().join(".");
                    return (
                        <TableRow key={order.id} className={`${!order.active && "opacity-50"}`} >
                            <TableCell className='border-r'>{order.id}</TableCell>
                            <TableCell className='border-r'>{order.serviceName}</TableCell>
                            <TableCell className='border-r'>{order.serviceType}</TableCell>
                            <TableCell className='border-r'>{order.customerName}</TableCell>
                            <TableCell className='border-r'>{formatedDate}</TableCell>
                            <TableCell className="border-r">{order.price} zł</TableCell>
                            <TableCell className='flex justify-center items-center text-lg border-r'>
                                {order.status === "Zrobione" ? <MdDone className="text-green-500" /> :
                                    order.status === "W toku" ? <MdOutlineHourglassEmpty className="text-yellow-500" /> :
                                        <MdCancel className="text-red-500" />}
                            </TableCell>
                            <TableCell onClick={() => handleCopyToClipboard(order.customerEmail)} className='cursor-pointer underline-offset-2 hover:underline decoration-primary hover:text-primary text-left pr-4'>{order.customerEmail}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

export default LastOrdersTable