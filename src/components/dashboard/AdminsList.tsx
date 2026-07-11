import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { AiOutlineTool } from "react-icons/ai";
import Link from 'next/link';
const adminList = [
    { id: 1, displayName: "Papa", email: "oflebled@gmail.com", date: "09 Lip 2026" },
    { id: 2, displayName: "Koparka", email: "shjenmejn@gmail.com", date: "09 Lip 2026" },
    { id: 3, displayName: "Kuba", email: "jan.kowalski@nordscan.pl", date: "10 Lip 2026" },
    { id: 4, displayName: "Morgus", email: "anna.nowak@nordscan.pl", date: "11 Lip 2026" },
];

const AdminsList = () => {
    return (
        <Card>
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
                        {adminList.map((admin) => (
                            <TableRow key={admin.id}>
                                <TableCell>{admin.id}</TableCell>
                                <TableCell>{admin.displayName}</TableCell>
                                <TableCell>{admin.email}</TableCell>
                                <TableCell>{admin.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default AdminsList