//src/context/SidebarMenuContext.tsx
import { useSidebarMenu } from "@/hooks"
import { createContext, ReactNode, useContext } from "react"

interface SidebarMenuContextType {
	activeSection: string
	handleMenuClick: (id: string) => void
}

const SidebarMenuContext = createContext<SidebarMenuContextType | undefined>(
	undefined,
)

export const SidebarMenuProvider = ({
	children,
	initialSection = "settings",
}: {
	children: ReactNode
	initialSection?: string
}) => {
	const { activeSection, handleMenuClick } = useSidebarMenu(initialSection)

	return (
		<SidebarMenuContext.Provider value={{ activeSection, handleMenuClick }}>
			{children}
		</SidebarMenuContext.Provider>
	)
}

export const useSidebarMenuContext = () => {
	const context = useContext(SidebarMenuContext)
	if (!context) {
		throw new Error(
			"useSidebarMenuContext must be used within a SidebarMenuProvider",
		)
	}
	return context
}
