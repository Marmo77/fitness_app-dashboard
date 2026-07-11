import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { MdDone, MdOutlineHourglassEmpty, MdCancel } from "react-icons/md";
import { type OrderProps } from '@/lib/data/orders';
import { handleCopyToClipboard } from '@/lib/functions';
import { OrdersHeaderSchema } from '@/lib/data/orderSchema';

const OrderTable = ({ orders }: { orders: OrderProps[] }) => {
    return (
        <div className="flex flex-col gap-4">
            <Table className='max-h-[450px] border relative'>
                <TableHeader className="border-b border-primary sticky top-0 z-50 bg-background">
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
                            <TableRow key={order.id} className={`${!order.active && "opacity-50"}`}>
                                <TableCell className='border-r font-medium'>{order.id}</TableCell>
                                <TableCell className='border-r'>{order.serviceName}</TableCell>
                                <TableCell className='border-r'>{order.serviceType}</TableCell>
                                <TableCell className='border-r font-semibold'>{order.customerName}</TableCell>
                                <TableCell className='border-r text-muted-foreground'>{formatedDate}</TableCell>
                                <TableCell className='border-r text-muted-foreground'>{order.price} zł</TableCell>
                                <TableCell className='flex justify-center items-center text-lg border-r'>
                                    {order.status === "Zrobione" ? <MdDone className="text-emerald-500" /> :
                                        order.status === "W toku" ? <MdOutlineHourglassEmpty className="text-amber-500" /> :
                                            <MdCancel className="text-destructive" />}
                                </TableCell>
                                <TableCell
                                    onClick={() => handleCopyToClipboard(order.customerEmail)}
                                    className='cursor-pointer underline-offset-2 hover:underline decoration-primary hover:text-primary text-left pr-4'
                                >
                                    {order.customerEmail}
                                </TableCell>
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

export default OrderTable;