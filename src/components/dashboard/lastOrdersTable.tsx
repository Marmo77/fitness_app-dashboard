"use client";
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { OrdersHeaderSchema } from '../../lib/data/orders'
import { Button } from '../ui/button'
import { Test } from '@/app/(main)/(dashboard)/actions'

const LastOrdersTable = () => {



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
                <TableRow>
                    <TableCell><Button onClick={Test}>d</Button></TableCell>
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