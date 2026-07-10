import { UsersList, isUserAdmin, UserInfoI, IUserFilter } from '@/lib/AdminActions';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import GrantRevokeButton from './grant-revoke-button';
import { ShieldAlert } from 'lucide-react';







const AccessSettings = async ({ user_id, filter_choice }: { user_id: string | null, filter_choice: IUserFilter }) => {
    const AllUsersList: UserInfoI[] | null = await UsersList({ filter: filter_choice.filter });
    const is_admin = await isUserAdmin();

    // if user is admin, he cannot revoke admin status from himself
    const UserIsAdmin = (userID: string | null, adminID: string): boolean => {
        if (userID === adminID) {
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
                            <TableHead>Akcje</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {AllUsersList?.map((user) => {
                            const userIsAdmin = UserIsAdmin(user_id, user.id);


                            return (
                                <TableRow key={user.id} >
                                    <TableCell className={userIsAdmin ? 'text-primary font-mono' : ''}>{user.email}</TableCell>
                                    <TableCell className={userIsAdmin ? 'underline decoration-2 underline-offset-2 decoration-primary/75' : ''}>{user.display_name}</TableCell>
                                    <TableCell className={`font-mono ${user.is_admin === true ? "text-primary" : "text-red-500"}`}>{user.is_admin ? "Admin" : "User"}</TableCell>
                                    <TableCell className='text-center flex gap-2 justify-center'>
                                        <GrantRevokeButton id={user.id} option={{ option: 'grant' }} disabled={user.is_admin || userIsAdmin} />
                                        <GrantRevokeButton id={user.id} option={{ option: 'revoke' }} disabled={!user.is_admin || userIsAdmin} />
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