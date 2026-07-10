import { getUserProfileDB, UserProfilType } from '@/lib/getUserData';
import React from 'react'

const ProfilesDBTest = async () => {
    const userProfileDB: UserProfilType | null = await getUserProfileDB();
    return (
        <div>
            <p>Test {userProfileDB?.display_name}</p>
            <p>Email {userProfileDB?.email}</p>
            <p>Avatar {userProfileDB?.avatar_url}</p>
            <p>Created {userProfileDB?.created_at}</p>
            <p>ID {userProfileDB?.id}</p>
        </div>
    )
}

export default ProfilesDBTest