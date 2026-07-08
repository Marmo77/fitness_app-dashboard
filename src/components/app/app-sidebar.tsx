import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { AppNavLinks } from "@/components/app/app-nav-links"
import { NavUser } from "@/components/app/app-nav-user"

type AppSidebarUser = {
  name: string
  email: string
  avatar: string
}

export function AppSidebar({ user }: { user: AppSidebarUser }) {
  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader className="p-3">
        <div className="flex items-center gap-3 rounded-2xl border bg-card/60 p-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground">
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

      <SidebarFooter className="p-3">
        <NavUser user={user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}