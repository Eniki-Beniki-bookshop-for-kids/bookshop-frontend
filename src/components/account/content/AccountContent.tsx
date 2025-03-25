import { useSidebarMenuContext } from "@/context/SidebarMenuContext"
import { accountContentMap } from "@/types/constants"
import { Box, GridItem, Heading } from "@chakra-ui/react"

export const AccountContent = () => {
	const { activeSection } = useSidebarMenuContext()

	const { title, component } =
		accountContentMap[activeSection] || accountContentMap["settings"]

	return (
		<GridItem area="main">
			<Box
				bg="#FFF"
				borderRadius="30px"
				padding="30px"
				ml={8}
				color="customBlack"
				height="full"
			>
				<Heading as="h2" size="md" mb={6}>
					{title}
				</Heading>
				{component}
			</Box>
		</GridItem>
	)
}
