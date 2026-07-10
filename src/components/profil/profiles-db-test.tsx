import { getUserProfileDB, UserProfilType } from '@/lib/getUserData';
import React from 'react'
import { Card } from '../ui/card';
import { isUserAdmin, UsersList, UserInfoI } from '@/lib/AdminActions';

const ProfilesDBTest = async () => {
    const userProfil: UserProfilType | null = await getUserProfileDB();
    const isAdmin: boolean = await isUserAdmin();

    const ListOfUsers: UserInfoI[] | null = await UsersList({ filter: "everyone" });

    return (
        <div className="grid grid-cols-2 gap-4">
            <Card className='border p-4'>
                <p>Display Name: {userProfil?.display_name}</p>
                <p>Email: {userProfil?.email}</p>
                <p>Avatar: {userProfil?.avatar_url}</p>
                <p>Created At: {userProfil?.created_at}</p>
                <p>ID: {userProfil?.id}</p>
                <p>Provider: {userProfil?.provider}</p>
            </Card>
            <Card className="border p-4">
                <p className='text-bold text-'>ADMIN TEST</p>
                <p>admin: {isAdmin ? "jest" : "nie jest"}</p>
                <p>Lista użytkowników:</p>
                <ul>
                    {ListOfUsers?.map((user) => (
                        <li key={user.id}>
                            {user.display_name} - {user.email} - {user.is_admin ? "Admin" : "User"}
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    )
}

export default ProfilesDBTest