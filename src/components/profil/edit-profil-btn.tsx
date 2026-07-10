import React from 'react'
import { Button } from '../ui/button'
import { getUserProfile } from '@/lib/getUserData'



const EditProfilBtn = async () => {
    const userProfile = await getUserProfile();
    return (
        <Button variant={'outline'} className="h-10 self-center mr-6">
            Edytuj
        </Button>
    )
}

export default EditProfilBtn