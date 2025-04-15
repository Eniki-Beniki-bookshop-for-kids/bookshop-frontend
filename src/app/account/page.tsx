//src/app/account/page.tsx
"use client"

import { PageTitle } from "@/components"
import { AccountContent, AccountSidebar } from "@/components/account"
import { SidebarMenuProvider } from "@/context/SidebarMenuContext"
import { useAuthStore } from "@/stores/authStore"
import { Box, Grid } from "@chakra-ui/react"

export default function AccountPage() {
	const { user } = useAuthStore()

	if (!user) {
		return (
			<PageTitle title="Для доступу до особистого кабінету необхідно авторизуватися" />
		)
	}

	return (
		<SidebarMenuProvider initialSection="settings">
			<Box pb={12}>
				<Grid
					templateAreas={{
						base: `"title" "sidebar" "main"`, // На мобільних: вертикально
						md: `"title title" "sidebar main"`, // На десктопі: заголовок на всю ширину, потім сайдбар і контент
					}}
					gridTemplateRows={{ base: "auto auto auto", md: "auto 1fr" }}
					gridTemplateColumns={{ base: "1fr", md: "auto 1fr" }}
				>
					<PageTitle title="Особистий кабінет" />
					<AccountSidebar />
					<AccountContent />
				</Grid>
			</Box>
		</SidebarMenuProvider>
	)
}
