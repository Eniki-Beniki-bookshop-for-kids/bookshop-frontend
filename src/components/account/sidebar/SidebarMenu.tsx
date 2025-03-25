import { useAuthStore } from "@/stores/authStore"
import { sidebarLinks } from "@/types/constants"
import { HStack, Text, VStack } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { Fragment, useState } from "react"
import { CustomDivider } from "./CustomDivider"

export const SidebarMenu = () => {
	const [activeSection, setActiveSection] = useState("settings")
	const router = useRouter()

	const handleMenuClick = (id: string) => {
		if (id === "logout") {
			useAuthStore.getState().logout()
			router.push("/")
		} else {
			setActiveSection(id)
		}
	}

	return (
		<VStack align="start" spacing={3}>
			{sidebarLinks.map((link, idx) => {
				const isActive = activeSection === link.id
				const IconComponent = link.icon
				const color = isActive ? "customViolet" : "customBlack"

				return (
					<Fragment key={link.id}>
						<HStack
							key={link.id}
							spacing={2}
							align="center"
							cursor="pointer"
							color={color}
							_hover={{ textDecoration: "underline" }}
							onClick={() => handleMenuClick(link.id)}
						>
							<IconComponent
								{...link.defaultProps}
								colorFill={color}
								colorStroke={color}
							/>
							<Text>{link.label}</Text>
						</HStack>
						{(idx === 1 || idx === 5) && <CustomDivider />}
					</Fragment>
				)
			})}
		</VStack>
	)
}
