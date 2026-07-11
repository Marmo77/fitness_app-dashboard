import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { OrdersHeaderSchema } from '../historia/orders'

const LastOrdersTable = () => {
    return (
        <Table>
            <TableHeader>
                {Object.values(OrdersHeaderSchema).map((header) => (
                    <TableHead key={header}>{header}</TableHead>
                ))}
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Usługa 1</TableCell>
                    <TableCell>Klient 1</TableCell>
                    <TableCell>Data 1</TableCell>
                    <TableCell>Status 1</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default LastOrdersTable