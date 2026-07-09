import { AdminInformation, AdminsList, isUserAdmin } from '@/lib/getUser';
import React from 'react'

const UserStatus = async () => {
    const isAdmin = await isUserAdmin();

    return (
        <section className='bg-amber-100 flex-1'>
            <div>
                <h2>Twoje statystyki</h2>
                <p>Status: <span className={`px-2 py-1 rounded-full ${isAdmin ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>{isAdmin ? "Admin" : "User"}</span></p>
            </div>
            <div>
                <h2>Dostęp do ustawień</h2>
            </div>
        </section>
    )
}

export default UserStatus