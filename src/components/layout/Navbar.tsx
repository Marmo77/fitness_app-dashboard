"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Plus, HelpCircle, Search } from "lucide-react";
import { company, dummyUser } from "@/lib/constants";
import { LogoutButton } from "@/components/auth/logout-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
    const [companyFront, companyBack] = company.name.split(" ");
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleMenu = () => setIsMobileOpen(!isMobileOpen);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">

                {/* LWA STRONA: Logo, Wyszukiwarka, Akcje */}
                <div className="flex items-center gap-4 lg:gap-6 flex-1">
                    <Link href="/" className="font-bold text-lg tracking-tight shrink-0">
                        <span className="text-primary">{companyFront}</span>
                        {companyBack && <span className="text-muted-foreground"> {companyBack}</span>}
                    </Link>

                    {/* Desktop Wyszukiwarka i Przyciski */}
                    <div className="hidden md:flex items-center gap-2 max-w-sm w-full">
                        <div className="relative w-full">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Wyszukaj..."
                                className="w-full pl-9 bg-muted/50 focus-visible:bg-background"
                            />
                        </div>
                        <Button variant="outline" size="icon" className="shrink-0">
                            <Plus className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="shrink-0">
                            <HelpCircle className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* ŚRODEK: Nawigacja Desktop */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">Home</Link>
                    <Link href="/dodaj" className="text-foreground/80 hover:text-foreground transition-colors">Dodaj</Link>
                    <Link href="/historia" className="text-foreground/80 hover:text-foreground transition-colors">Historia</Link>
                </nav>

                {/* PRAWA STRONA: Profil i Hamburger */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-3">
                        <span className="text-sm font-medium text-foreground">
                            {dummyUser.username}
                        </span>
                        <Avatar className="h-8 w-8 border border-border">
                            <AvatarFallback className="bg-primary/10 text-primary text-xs">
                                {dummyUser.username.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <LogoutButton />
                    </div>

                    {/* Hamburger Mobile */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={toggleMenu}
                    >
                        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* MENU MOBILNE */}
            {isMobileOpen && (
                <div className="md:hidden border-t border-border bg-background p-4 flex flex-col gap-4 shadow-lg">
                    <div className="flex items-center gap-2">
                        <div className="relative w-full">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Wyszukaj..."
                                className="w-full pl-9 bg-muted/50"
                            />
                        </div>
                        <Button variant="outline" size="icon" className="shrink-0">
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>

                    <nav className="flex flex-col gap-2">
                        <Link href="/" onClick={toggleMenu} className="block px-2 py-2 text-sm font-medium rounded-md hover:bg-muted">Home</Link>
                        <Link href="/dodaj" onClick={toggleMenu} className="block px-2 py-2 text-sm font-medium rounded-md hover:bg-muted">Dodaj</Link>
                        <Link href="/historia" onClick={toggleMenu} className="block px-2 py-2 text-sm font-medium rounded-md hover:bg-muted">Historia</Link>
                    </nav>

                    <div className="pt-4 border-t border-border flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                                    {dummyUser.username.charAt(0).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium text-foreground">{dummyUser.username}</span>
                        </div>
                        <LogoutButton short={true} />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;