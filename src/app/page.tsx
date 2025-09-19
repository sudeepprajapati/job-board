import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebarClient } from "./_AppSideBarClient";
import { SignedIn, SignedOut, SignInButton, } from "@clerk/nextjs";
import { SidebarUserButton } from "@/features/users/components/SidebarUserButton";
import { LogInIcon } from "lucide-react";

export default function HomePage() {
  return (
    <SidebarProvider className="overflow-y-hidden">
      <AppSidebarClient>
        <Sidebar collapsible="icon" className="overflow-hidden" >
          <SidebarHeader className="flex-row items-center">
            <SidebarTrigger />
            <span className="text-lg text-nowrap">Get Jobs</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SignedOut>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild >
                      <SignInButton>
                        <span>
                          <LogInIcon />
                          Sign in
                        </span>
                      </SignInButton>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SignedOut>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SignedIn>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <SidebarUserButton />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </SignedIn>
        </Sidebar>
        <main className="flex-1">Jobs</main>
      </AppSidebarClient>
    </SidebarProvider>
  )
}
