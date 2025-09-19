import { SidebarUserButtonClient } from "./_SidebarUserButtonClient"
// import { getCurrentUser } from "@/services/clerk/lib/getCurrentAuth"
// import { SignOutButton } from "@/services/clerk/components/AuthButtons"
// import { SidebarMenuButton } from "@/components/ui/sidebar"
import { auth } from "@clerk/nextjs/server"
import { LogOutIcon } from "lucide-react"

export async function SidebarUserButton() {
  // const { user } = await getCurrentUser({ allData: true })
  const { userId } = await auth()

  // if (user == null) {
  //   return (
  //     <SignOutButton>
  //     <SidebarMenuButton>
  //       <LogOutIcon />
  //       <span>Log Out</span>
  //     </SidebarMenuButton>
  //     </SignOutButton >
  //   )
  // }

  // return <SidebarUserButtonClient user={user} />
  return <SidebarUserButtonClient user={{ email: "kyle@test.com", name: "Kyle Cook", imageUrl: "" }} />
}
