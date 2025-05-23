//src/components/account/sidebar/AccountSidebarMenu.tsx
import { useSidebarMenuContext } from "@/context/SidebarMenuContext"
import { sidebarAccountLinks } from "@/types/constants"
import { HStack, Text, VStack } from "@chakra-ui/react"
import { Fragment } from "react"
import { CustomDivider } from "./CustomDivider"

export const AccountSidebarMenu = () => {
	const { activeSection, handleMenuClick } = useSidebarMenuContext()

	return (
		<VStack align="start" spacing={3}>
			{sidebarAccountLinks.map((link, idx) => {
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
