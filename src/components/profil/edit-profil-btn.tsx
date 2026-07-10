// src/components/profil/edit-profil-btn.tsx
"use client";

import React, { useState, useTransition } from "react";
import { Pencil, Loader2 } from "lucide-react";
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

import { updateDisplayName } from "@/lib/getUserData";

export default function EditProfilBtn() {
    const [open, setOpen] = useState(false);
    const [newName, setNewName] = useState("");
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!newName.trim()) return;

        startTransition(async () => {
            const success = await updateDisplayName(newName.trim());

            if (success) {
                setOpen(false);
                setNewName("");
            } else {
                alert("Wystąpił błąd podczas aktualizacji nazwy.");
            }
        });
    };

    const handleOpenChange = (isOpen: boolean) => {
        if (!isOpen) setNewName("");
        setOpen(isOpen);
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger
                className={buttonVariants({ variant: "outline", size: "icon" })}
            >
                <Pencil className="h-6 w-6" />
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Edytuj profil</DialogTitle>
                        <DialogDescription>
                            Wprowadź nową nazwę wyświetlaną dla swojego konta.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4 py-6">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Nazwa
                            </Label>
                            <Input
                                id="name"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                placeholder="Nowa nazwa użytkownika"
                                className="col-span-3"
                                disabled={isPending}
                                required
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
                        <Button type="submit" disabled={isPending || !newName.trim()}>
                            {isPending ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Zapisywanie...
                                </>
                            ) : (
                                "Zapisz zmiany"
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}