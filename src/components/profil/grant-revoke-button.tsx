"use client";

import { useTransition } from "react";
import { Button } from "../ui/button";
import { RevokeAdmin, GrantAdmin } from "@/lib/AdminActions";
import { Crown, Trash } from "lucide-react";



// Button that Grant or Revoke admin status
export default function GrantRevokeButton({ email, button_type }: { email: string, button_type: "grant" | "revoke" }) {
    const [isPending, startTransition] = useTransition();

    const handlePermissions = () => {
        startTransition(async () => {
            if (button_type === "grant") {
                await GrantAdmin(email);
            } else {
                await RevokeAdmin(email);
            }
        });
    }

    return (
        <Button
            size="icon"
            variant="outline"
            className={`group duration-500 transition-all ${button_type === "grant" ? "hover:bg-primary/10" : "hover:bg-destructive/10"}`}
            onClick={handlePermissions}
            disabled={isPending}
        >
            {button_type === "grant" ? (
                <Crown className='group-hover:-rotate-25 group-hover:-translate-y-0.5 duration-300 transition-all text-primary' />
            ) : (
                <Trash className='group-hover:rotate-25 group-hover:-translate-y-0.5 duration-300 transition-all text-red-600' />
            )}
        </Button>
    );
}
