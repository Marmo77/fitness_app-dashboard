import { AdminsList, isUserAdmin, AdminInformation, RevokeAdmin } from '@/lib/AdminActions';
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { Crown, Trash } from 'lucide-react';
import GrantRevokeButton from './grant-revoke-button';

const AccessSettings = async () => {
    const AdminList: AdminInformation[] | null = await AdminsList();
    const is_admin = await isUserAdmin();


    return (
        is_admin ? (
            <section className='flex-1'>
                {/* {AdminList?.map((admin) => (
                    <div key={admin.id}>
                        <p>{admin.email}</p>
                        <p>{admin.given_by}</p>
                        <p>{admin.is_admin ? "Admin" : "User"}</p>
                    </div>
                ))} */}

                <Table className='max-h-[450px] border'>
                    <TableHeader className="border-b border-primary">
                        <TableRow className='hover:bg-transparent'>
                            <TableHead>Email</TableHead>
                            <TableHead>Imię i nazwisko</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Nadany przez</TableHead>
                            <TableHead className='text-center'>Akcje</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {AdminList?.map((admin) => (
                            <TableRow key={admin.id}>
                                <TableCell>{admin.email}</TableCell>
                                <TableCell>{admin.email.split("@")[0]}</TableCell>
                                <TableCell className={`font-mono ${admin.is_admin === true ? "text-primary" : "text-red-500"}`}>{admin.is_admin ? "Admin" : "User"}</TableCell>
                                <TableCell className='text-xs text-muted-foreground'>{admin.granted_by}</TableCell>
                                <TableCell className='text-center flex gap-2 justify-center'>
                                    {/* <Button size="icon" variant="outline" className={"group hover:bg-primary/10 duration-500 transition-all"}><Crown className='group-hover:-rotate-25 group-hover:-translate-y-0.5 duration-300 transition-all text-primary' /></Button>
                                <Button size="icon" variant="outline" className={"group hover:bg-destructive/10 duration-500 transition-all"}><Trash className='group-hover:rotate-25 group-hover:-translate-y-0.5 duration-300 transition-all text-red-600' /></Button> */}
                                    <GrantRevokeButton email={admin.email} button_type="grant" />
                                    <GrantRevokeButton email={admin.email} button_type="revoke" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>) : (
            <section className='bg-amber-300 flex-1'>
                <h2>Brak uprawnień do zarządzania dostępem</h2>
            </section>
        )
    )
}

export default AccessSettings