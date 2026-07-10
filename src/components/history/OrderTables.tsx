"use client"
import { orderMockup, type OrderProps } from './orders'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { MdDone, MdOutlineHourglassEmpty, MdCancel } from "react-icons/md"
import { FilterAndSortOrders } from './actions';

const OrderTable = ({ searchValue, sortValue, filterOrder }: { searchValue: string, sortValue: string, filterOrder: "asc" | "desc" }) => {
    //Get orders List

    //copy to clipboard
    const handleCopyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    }
    // Filtrowanie & Sortowanie 
    const FilteredAndSortedOrders = FilterAndSortOrders(searchValue, sortValue, filterOrder)

    return (
        <div className="flex flex-col gap-4">
            <Table className='max-h-[450px] border relative'>
                <TableHeader className="border-b border-primary sticky z-50">
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

                    {FilteredAndSortedOrders.map((order) => {

                        const formatedDate = order.date.split("-").reverse().join(".");
                        return (
                            <TableRow key={order.id} >
                                <TableCell className='border-r'>{order.id}</TableCell>
                                <TableCell className='border-r'>{order.serviceName}</TableCell>
                                <TableCell className='border-r'>{order.serviceType}</TableCell>
                                <TableCell className='border-r'>{order.customerName}</TableCell>
                                <TableCell className='border-r'>{formatedDate}</TableCell>
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