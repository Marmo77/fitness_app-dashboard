import { AdminsList, isUserAdmin, AdminInformation } from '@/lib/AdminActions';
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import GrantRevokeButton from './grant-revoke-button';

const AccessSettings = async ({ user_email }: { user_email: string }) => {
    const AdminList: AdminInformation[] | null = await AdminsList();
    const is_admin = await isUserAdmin();

    // if user is admin, he cannot revoke admin status from himself
    const UserIsAdmin = (userEmail: string, adminEmail: string): boolean => {
        if (userEmail === adminEmail) {
            return true;
        }
        return false;
    }



    return (
        is_admin ? (
            <section className='flex-1'>
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
                        {AdminList?.map((admin) => {
                            const userIsAdmin = UserIsAdmin(user_email, admin.email);


                            return (
                                <TableRow key={admin.id} >
                                    <TableCell className={userIsAdmin ? 'text-primary font-mono' : ''}>{admin.email}</TableCell>
                                    <TableCell>{admin.email.split("@")[0]}</TableCell>
                                    <TableCell className={`font-mono ${admin.is_admin === true ? "text-primary" : "text-red-500"}`}>{admin.is_admin ? "Admin" : "User"}</TableCell>
                                    <TableCell className='text-xs text-muted-foreground'>{admin.granted_by}</TableCell>
                                    <TableCell className='text-center flex gap-2 justify-center'>
                                        <GrantRevokeButton email={admin.email} button_type="grant" disabled={admin.is_admin || userIsAdmin} />
                                        <GrantRevokeButton email={admin.email} button_type="revoke" disabled={!admin.is_admin || userIsAdmin} />
                                    </TableCell>
                                </TableRow>
                            )
                        })}
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