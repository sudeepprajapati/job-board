import { getCurrentUser } from "@/services/clerk/lib/getCurrentAuth"
import { SidebarUserButtonClient } from "./_SidebarUserButtonClient"
import { SignOutButton } from "@clerk/nextjs"
import { SidebarMenuButton } from "@/components/ui/sidebar"
import { auth } from "@clerk/nextjs/server"
import { LogOutIcon } from "lucide-react"

export async function SidebarUserButton() {
  const { user } = await getCurrentUser({ allData: true })
  const { userId } = await auth()

  if (user == null) {
    return (
      <SignOutButton>
        <div className="flex items-center gap-2 ">
          <LogOutIcon size="18" />
          <span>Log Out</span>
        </div>
      </SignOutButton >
    )
  }

  return <SidebarUserButtonClient user={user} />
}
