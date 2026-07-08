import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { AppNavLinks } from "@/components/app/app-nav-links"
import { NavUser } from "./app-nav-user"


type UserProp = {
  name: string
  email: string
  avatar: string
}

export function AppSidebar({ User }: { User: UserProp }) {
  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader className="px-4 py-4">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            F
          </div>

          <div className="min-w-0 group-data-[collapsible=icon]:hidden">
            <p className="truncate text-sm font-semibold">Fitness App</p>
            <p className="truncate text-xs text-muted-foreground">
              User panel
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <AppNavLinks />
      </SidebarContent>

      {/* FOOTER */}

      <SidebarFooter className="">
        {/* <div className="rounded-xl border bg-card/50 p-3 group-data-[collapsible=icon]:hidden">
          <p className="text-xs font-medium">Upgrade plan</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Unlock more analytics and tracking.
          </p>
        </div> */}
        <NavUser user={User} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}