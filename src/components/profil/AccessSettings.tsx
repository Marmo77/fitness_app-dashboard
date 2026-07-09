import { AdminsList, isUserAdmin, AdminInformation } from '@/lib/getUser';
import React from 'react'

const AccessSettings = async () => {
    const AdminList: AdminInformation[] | null = await AdminsList();
    const is_admin = await isUserAdmin();
    return (
        is_admin ? (
            <section className='bg-amber-300 flex-1'>
                {AdminList?.map((admin) => (
                    <div key={admin.id}>
                        <p>{admin.email}</p>
                        <p>{admin.given_by}</p>
                        <p>{admin.is_admin ? "Admin" : "User"}</p>
                    </div>
                ))}
            </section>) : (
            <section className='bg-amber-300 flex-1'>
                <h2>Brak uprawnień do zarządzania dostępem</h2>
            </section>
        )
    )
}

export default AccessSettings