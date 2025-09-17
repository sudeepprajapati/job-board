import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebarClient } from "./_AppSideBarClient";

export default function HomePage() {
  return (
    <SidebarProvider className="overflow-y-hidden">
      <AppSidebarClient>
        <Sidebar collapsible="icon" className="overflow-hidden" >
          <SidebarHeader className="flex-row">
            <SidebarTrigger />
            <span className="text-xl text-nowrap">Get Jobs</span>
          </SidebarHeader>
          <SidebarContent></SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Signup</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1">Jobs</main>
      </AppSidebarClient>
    </SidebarProvider>
  )
}
