"use client"
import { orderMockup, type OrderProps } from './orders'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { MdDone, MdOutlineHourglassEmpty, MdCancel } from "react-icons/md"

const OrderTable = () => {
    //Get orders List
    const OrderList: OrderProps[] = orderMockup;

    //copy to clipboard
    const handleCopyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    }


    return (
        <div className="flex flex-col gap-4">
            <Table className='max-h-[450px] border'>
                <TableHeader className="border-b border-primary">
                    <TableRow className='hover:bg-transparent'>
                        <TableHead>ID</TableHead>
                        <TableHead>Usługa</TableHead>
                        <TableHead>Kategoria</TableHead>
                        <TableHead>Klient</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Kontakt z klientem</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {OrderList.map((order) => (
                        <TableRow key={order.id} >
                            <TableCell>{order.id}</TableCell>
                            <TableCell>{order.serviceName}</TableCell>
                            <TableCell>{order.serviceType}</TableCell>
                            <TableCell>{order.customerName}</TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell className='flex justify-center items-center text-lg'>
                                {order.status === "Zrobione" ? <MdDone className="text-green-500" /> :
                                    order.status === "W toku" ? <MdOutlineHourglassEmpty className="text-yellow-500" /> :
                                        <MdCancel className="text-red-500" />}
                            </TableCell>
                            <TableCell onClick={() => handleCopyToClipboard(order.customerEmail)} className='cursor-pointer underline-offset-2 hover:underline decoration-primary hover:text-primary text-xs text-left pr-4'>{order.customerEmail}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={7} className="text-center">
                            <Button variant="outline" className="w-full">
                                Zobacz wszystkie zamówienia
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}

export default OrderTable