"use client";
import { Button } from '../ui/button'
import { DeleteAdmin } from '@/lib/AdminActions'
import { Loader2, X } from 'lucide-react'
import { useTransition } from 'react';

const DeleteAdminBtn = ({ email, disabled = false }: { email: string, disabled?: boolean }) => {
    const [isPending, startTransition] = useTransition();

    const handleDeleteAdmin = async () => {
        startTransition(async () => {
            await DeleteAdmin(email);
        });
    }

    return (
        <Button onClick={handleDeleteAdmin} variant="outline" size="sm" className="group duration-500 transition-all hover:bg-red-600/10" disabled={disabled || isPending}>
            {isPending ? (
                <Loader2 className='group-hover:rotate-90 duration-300 transition-all text-destructive animate-spin' />
            ) : (
                <X className='group-hover:rotate-90 duration-300 transition-all text-destructive' />
            )}
        </Button>
    )
}

export default DeleteAdminBtn