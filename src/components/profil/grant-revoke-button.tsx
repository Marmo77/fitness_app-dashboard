"use client";

import { useTransition } from "react";
import { Button } from "../ui/button";
import { GrantRevokeAdmin, GrantRevokeOption } from "@/lib/AdminActions";
import { Crown, Trash } from "lucide-react";



// Button that Grant or Revoke admin status
export default function GrantRevokeButton({ id, option, disabled = false }: { id: string, option: GrantRevokeOption, disabled?: boolean }) {
    const [isPending, startTransition] = useTransition();

    const handlePermissions = () => {
        startTransition(async () => {
            await GrantRevokeAdmin(id, option);
        });
    }

    return (
        <Button
            size="icon"
            variant="outline"
            className={`group duration-500 transition-all ${option.option === "grant" ? "hover:bg-primary/10" : "hover:bg-destructive/10"}`}
            onClick={handlePermissions}
            disabled={isPending || disabled}
        >
            {option.option === "grant" ? (
                <Crown className='group-hover:-rotate-25 group-hover:-translate-y-0.5 duration-300 transition-all text-primary' />
            ) : (
                <Trash className='group-hover:rotate-25 group-hover:-translate-y-0.5 duration-300 transition-all text-red-600' />
            )}
        </Button>
    );
}
