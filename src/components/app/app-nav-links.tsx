"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dumbbell, LayoutDashboard, Settings, User } from "lucide-react"
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

const links = [
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        href: "/training",
        label: "Training",
        icon: Dumbbell,
    },
    {
        href: "/profile",
        label: "Profile",
        icon: User,
    },
    {
        href: "/settings",
        label: "Settings",
        icon: Settings,
    },
]

export function AppNavLinks() {
    const pathname = usePathname()

    return (
        <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>

            <SidebarGroupContent>
                <SidebarMenu className="gap-1">
                    {links.map((link) => {
                        const Icon = link.icon
                        const isActive =
                            pathname === link.href || pathname.startsWith(`${link.href}/`)

                        return (
                            <SidebarMenuItem key={link.href} className="cursor-pointer">
                                <Link href={link.href}>
                                    <SidebarMenuButton

                                        isActive={isActive}
                                        tooltip={link.label}
                                        className="h-11 rounded-xl text-base md:h-10"
                                    >
                                        <Icon className="h-7 w-7" />
                                        <span>{link.label}</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                        )
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}