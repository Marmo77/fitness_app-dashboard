"use client";

import React, { useState, useTransition } from "react";
import { UserPlus, Loader2 } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AddUserToAdmins } from "@/lib/AdminActions";

const AddAdmin = () => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) return;

        startTransition(() => {
            AddUserToAdmins(email);
        });

        setOpen(false);
        setEmail("");
    };

    const handleOpenChange = (isOpen: boolean) => {
        if (!isOpen) {
            setEmail("");
        }
        setOpen(isOpen);
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <div className="self-center mr-6">
                <DialogTrigger className={buttonVariants({ variant: "outline", className: "h-10" })}>
                    <UserPlus className="w-4 h-4 mr-2" />
                    Dodaj admina
                </DialogTrigger>
            </div>

            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Dodaj administratora</DialogTitle>
                        <DialogDescription>
                            Wprowadź adres e-mail użytkownika, któremu chcesz nadać uprawnienia administracyjne.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4 py-6">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                E-mail
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="jan@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="col-span-3"
                                required
                                disabled={isPending}
                            />
                        </div>
                    </div>

                    <DialogFooter>
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={() => setOpen(false)}
                            disabled={isPending}
                        >
                            Anuluj
                        </Button>
                        <Button type="submit" disabled={isPending || !email}>
                            {isPending ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Dodawanie...
                                </>
                            ) : (
                                "Zapisz"
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddAdmin;