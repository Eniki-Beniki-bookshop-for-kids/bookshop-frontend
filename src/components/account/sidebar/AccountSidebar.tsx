//src/components/account/sidebar/AccountSidebar.tsx
import { Box, GridItem, VStack } from "@chakra-ui/react"
import { CustomDivider } from "./CustomDivider"
import { AccountSidebarHeader } from "./AccountSidebarHeader"
import { AccountSidebarMenu } from "./AccountSidebarMenu"

export const AccountSidebar = () => {
	return (
		<GridItem area="sidebar">
			<Box bg="#FFF" borderRadius="30px" padding="30px" color="customBlack">
				<VStack spacing={4} align="start">
					<AccountSidebarHeader />
					<CustomDivider />
					<AccountSidebarMenu />
				</VStack>
			</Box>
		</GridItem>
	)
}
