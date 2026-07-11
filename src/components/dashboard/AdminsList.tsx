import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { AiOutlineTool } from "react-icons/ai";
import Link from 'next/link';
import { GetAdminsList } from '@/lib/getDasboardData';
import { UserIsAdmin } from '@/lib/functions';
import { getUserProfileDB, UserProfilType } from '@/lib/getUserData';
// const adminList = [
//     { id: 1, displayName: "Papa", email: "oflebled@gmail.com", date: "09 Lip 2026" },
//     { id: 2, displayName: "Koparka", email: "shjenmejn@gmail.com", date: "09 Lip 2026" },
//     { id: 3, displayName: "Kuba", email: "jan.kowalski@nordscan.pl", date: "10 Lip 2026" },
//     { id: 4, displayName: "Morgus", email: "anna.nowak@nordscan.pl", date: "11 Lip 2026" },
// ];

const AdminsList = async () => {


    const userProfil: UserProfilType | null = await getUserProfileDB();
    const adminList = await GetAdminsList()
    console.log(adminList)


    const user_id = userProfil?.id || null;

    return (
        <Card className='h-full'>
            <CardHeader className='flex justify-between px-6'>
                <CardTitle className='text-primary text-xl font-extrabold'>Administratorzy</CardTitle>
                <Link href="/profil#access">
                    <Button size="sm" variant="outline" className='flex items-center rounded-lg'>
                        <AiOutlineTool className="text-lg mr-1" /> Zarządzaj
                    </Button>
                </Link>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Nazwa</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Dołączył</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {adminList.map((admin) => {
                            const date = new Date(admin.created_at);

                            const userIsAdmin = UserIsAdmin(user_id, admin.id);

                            return (
                                <TableRow key={admin.id} className={`text-xs ${userIsAdmin ? 'bg-primary/5' : ''}`}>
                                    <TableCell className={userIsAdmin ? 'text-primary font-mono' : ''}>{admin.id.slice(0, 5)}</TableCell>
                                    <TableCell className={userIsAdmin ? 'text-primary font-mono' : ''}>{admin.display_name}</TableCell>
                                    <TableCell className={userIsAdmin ? 'text-primary font-mono' : ''}>{admin.email}</TableCell>
                                    <TableCell className={userIsAdmin ? 'text-primary font-mono' : ''}>{date.toLocaleDateString()}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default AdminsList