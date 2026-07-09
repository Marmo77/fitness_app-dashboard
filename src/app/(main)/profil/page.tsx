import { LogoutButton } from '@/components/auth/logout-button'
import React from 'react'

const ProfilPage = () => {
    return (
        <main className="flex-1 relative flex items-center justify-center p-6">
            <div>
                Profil
                <LogoutButton />
            </div>
        </main>
    )
}

export default ProfilPage