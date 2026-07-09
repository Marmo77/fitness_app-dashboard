import { AdminsList, isUserAdmin, AdminInformation } from '@/lib/AdminActions';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import GrantRevokeButton from './grant-revoke-button';
import { ShieldAlert } from 'lucide-react';
import DeleteAdminBtn from './delete-admin-btn';

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
                            <TableHead>Nadany/Zabrany przez</TableHead>
                            <TableHead>Akcje</TableHead>
                            <TableHead>Usuń</TableHead>
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
                                    <TableCell className='text-xs text-muted-foreground'>{admin.granted_by ? admin.granted_by : admin.revoked_by}</TableCell>
                                    <TableCell className='text-center flex gap-2 justify-center'>
                                        <GrantRevokeButton email={admin.email} button_type="grant" disabled={admin.is_admin || userIsAdmin} />
                                        <GrantRevokeButton email={admin.email} button_type="revoke" disabled={!admin.is_admin || userIsAdmin} />
                                    </TableCell>
                                    <TableCell>
                                        <DeleteAdminBtn email={admin.email} disabled={userIsAdmin} />
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </section>) : (
            <section className="w-full flex flex-col items-center justify-center rounded-2xl bg-card border border-border shadow-sm p-8 sm:p-12 text-center min-h-[300px]">
                <div className="p-4 bg-amber-500/10 rounded-full mb-5">
                    <ShieldAlert className="h-10 w-10 text-amber-500" />
                </div>
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    Brak uprawnień do zarządzania
                </h2>
                <p className="text-sm text-muted-foreground mt-2 max-w-md">
                    Twoje konto nie posiada uprawnień administratora wymaganych do przeglądania i edycji ról użytkowników. Skontaktuj się z właścicielem systemu, aby uzyskać dostęp.
                </p>
            </section>
        )
    )
}

export default AccessSettings