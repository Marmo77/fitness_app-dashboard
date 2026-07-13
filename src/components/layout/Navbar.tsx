"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, HelpCircle, HourglassIcon, Contact2Icon, DollarSignIcon, User } from "lucide-react";
import { company } from "@/lib/constants";
import { LogoutButton } from "@/components/auth/logout-button";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { usePathname } from "next/navigation";
import { UserPillType, UserProfilType } from "@/lib/getUserData";
import QuickActions from "../navigation/quickActions";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import ToolTipWrapper from "../ToolTips";

interface NavbarProps {
    user: UserProfilType | null;
    pillInfos: UserPillType | null;
}

const Navbar = ({ user, pillInfos }: NavbarProps) => {
    const pathname = usePathname();
    const [companyFront, companyBack] = company.name.split(" ");
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // if user is on "/profil" -> Change nick color to primary
    const onProfil = pathname === "/profil" ? "text-primary" : "text-foreground";

    if (pathname === "/login") return null;

    const toggleMenu = () => setIsMobileOpen(!isMobileOpen);
    const isActive = (href: string) => pathname === href;

    const menuItems = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Dodaj",
            href: "/dodaj",
        },
        {
            label: "Historia",
            href: "/historia",
        },
    ];

    const PillItems = [
        {
            alt: "Do zarobienia z oczekujących zamówień",
            value: pillInfos?.moneyFromWaitingOrders,
            icon: DollarSignIcon,
            color: "text-green-500",
            bgColor: "hover:bg-green-50",
            href: "/historia",
        },
        {
            alt: "Oczekujące zamówienia",
            value: pillInfos?.waiting,
            icon: HourglassIcon,
            color: "text-primary",
            bgColor: "hover:bg-primary/10",
            href: "/historia",
        },
        {
            alt: "Ilosc wszystkich użytkowników",
            value: pillInfos?.totalUsers,
            icon: Contact2Icon,
            color: "text-blue-500",
            bgColor: "hover:bg-blue-50",
            href: "/profil",
        },
    ]



    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">

                {/* LEWA STRONA: Logo, Wyszukiwarka, Akcje */}
                <div className="flex items-center gap-4 lg:gap-6 flex-1">
                    <Link href="/" className="font-bold text-2xl tracking-tight shrink-0">
                        <span className="text-primary">{companyFront}</span>
                        {companyBack && <span className="text-foreground"> {companyBack}</span>}
                    </Link>

                    <div className="hidden md:flex items-center gap-2 max-w-sm w-full">
                        <QuickActions />
                        <ToolTipWrapper message="O aplikacji">
                            <Button variant="outline" size="icon" className="shrink-0">
                                <HelpCircle className="h-4 w-4" />
                            </Button>
                        </ToolTipWrapper>
                    </div>
                </div>

                {/* ŚRODEK: Nawigacja Desktop */}
                <nav className="hidden md:flex items-center gap-6 text-sm flex-1 font-medium">
                    {menuItems.map((item) => (
                        <div className="relative group" key={item.href}>
                            <Link
                                href={item.href}
                                className={`text-foreground/80 hover:text-primary transition-colors ${isActive(item.href) ? "text-primary/95" : ""}`}
                            >
                                {item.label}
                            </Link>
                            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                        </div>
                    ))}
                </nav>

                {/* PRAWA STRONA: Profil i Hamburger */}
                <div className="flex items-center gap-4">
                    <div className="gap-1 hidden lg:flex">
                        {PillItems.map((item) => (
                            <ToolTipWrapper key={item.value} message={item.alt}>

                                <Link href={item.href}>
                                    <Button variant="ghost" className={`text-xs ${item.color} ${item.bgColor} flex items-center gap-1 `} >
                                        <item.icon className={`size-4 ${item.color}`} /> {item.value}
                                    </Button>
                                </Link>
                            </ToolTipWrapper>
                        ))}
                    </div>
                    <div>
                        <ToolTipWrapper message="Przejdź do profilu" icon={User}>

                            <Link href="/profil" className="hidden md:flex items-center gap-3">
                                <span className={`text-sm font-semibold ${onProfil}`}>
                                    {user?.display_name}
                                </span>
                                <Avatar className="h-8 w-8 border border-border" >
                                    <AvatarImage src={user?.avatar_url || undefined} alt={user?.display_name || "Użytkownik"} />
                                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                                        {user?.display_name?.charAt(0).toUpperCase() || "U"}
                                    </AvatarFallback>
                                </Avatar>
                            </Link>
                        </ToolTipWrapper>
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
                        <div className="gap-1 flex w-full justify-between">
                            {PillItems.map((item) => (
                                <Link key={item.value} href={item.href} className="w-full" onClick={toggleMenu}>
                                    <Button variant="ghost" className={`text-xs w-full ${item.color} ${item.bgColor} flex items-center gap-1 `} >
                                        <item.icon className={`size-4 ${item.color}`} /> {item.value}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <nav className="flex flex-col gap-2">
                        <Link href="/" onClick={toggleMenu} className="block px-2 py-2 text-sm font-medium rounded-md hover:bg-muted">Home</Link>
                        <Link href="/dodaj" onClick={toggleMenu} className="block px-2 py-2 text-sm font-medium rounded-md hover:bg-muted">Dodaj</Link>
                        <Link href="/historia" onClick={toggleMenu} className="block px-2 py-2 text-sm font-medium rounded-md hover:bg-muted">Historia</Link>
                    </nav>

                    <div className="pt-4 border-t border-border flex items-center justify-between">
                        <Link href="/profil" onClick={toggleMenu} className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                                    {user?.display_name?.charAt(0).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium text-foreground">{user?.display_name}</span>
                        </Link>
                        <LogoutButton />
                    </div>
                </div>
            )
            }
        </header >
    );
};

export default Navbar;