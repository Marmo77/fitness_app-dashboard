import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { History, Plus, User } from 'lucide-react'

const QuickActions = () => {

    type TQuickMenu = {
        label: string;
        href: string;
        icon: React.ComponentType
    }

    const quickMenu: TQuickMenu[] = [
        {
            label: "Dodaj zlecenie",
            href: "/dodaj",
            icon: Plus,
        },
        {
            label: "Przejdź do historii",
            href: "/historia",
            icon: History,
        },
        {
            label: "Profil",
            href: "/profil",
            icon: User,
        },
    ]


    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary/80">
                        <div className='flex items-center gap-0.5'>
                            <AiOutlineThunderbolt className="" />
                            <p>Nowe zlecenie</p>
                        </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuItem>
                            {quickMenu.map((item) => {

                                const Icon = item.icon
                                return (
                                    <NavigationMenuLink href={item.href} key={item.label}>
                                        <Icon />
                                        <p>{item.label}</p>
                                    </NavigationMenuLink>

                                )
                            })}
                        </NavigationMenuItem>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu >
    )
}

export default QuickActions