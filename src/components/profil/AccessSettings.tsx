import { AdminsList, isUserAdmin, AdminInformation, RevokeAdmin } from '@/lib/AdminActions';
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { Crown, Trash } from 'lucide-react';

const AccessSettings = async () => {
    const AdminList: AdminInformation[] | null = await AdminsList();
    const is_admin = await isUserAdmin();


    // async function changeAdminStatus(email: string) {
    //     await ChangeAdminStatus(email);
    // }

    async function deleteAdminStatus(email: string) {
        await RevokeAdmin(email);
    }


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
                            <TableHead className='text-center'>Akcje</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>test@test.com</TableCell>
                            <TableCell>Test Test</TableCell>
                            <TableCell>Admin</TableCell>
                            <TableCell className='text-center flex gap-2 justify-center'>
                                <Button size="icon" variant="outline" className={"group hover:bg-primary/10 duration-500 transition-all"}><Crown className='group-hover:-rotate-25 group-hover:-translate-y-0.5 duration-300 transition-all text-primary' /></Button>
                                <Button size="icon" variant="outline" className={"group hover:bg-destructive/10 duration-500 transition-all"}><Trash className='group-hover:rotate-25 group-hover:-translate-y-0.5 duration-300 transition-all text-red-600' /></Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Button onClick={() => deleteAdminStatus("test@test.com")}>Uzyskaj dostęp</Button>
            </section>) : (
            <section className='bg-amber-300 flex-1'>
                <h2>Brak uprawnień do zarządzania dostępem</h2>
            </section>
        )
    )
}

export default AccessSettings