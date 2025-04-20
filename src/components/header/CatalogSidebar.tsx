// src/components/CatalogSidebar.tsx
"use client"

import { useSidebarMenuContext } from "@/context/SidebarMenuContext"
import { useBooks } from "@/hooks"
import { catalogMenu } from "@/types/constants"
import { Box, HStack, Text, VStack } from "@chakra-ui/react"
import { ArrowRightIcon, BookCatalogIcon } from "../ui"

export const CatalogSidebar = () => {
	const { updateFilters } = useBooks()
	const { activeSection, handleMenuClick } = useSidebarMenuContext()

	return (
		<Box
			position="absolute"
			top="86px"
			left={{ base: "20px", md: "80px" }}
			w="296px"
			h="677px"
			bg="#FFF"
			paddingY={4}
			paddingX={8}
			rounded="30px"
			zIndex="10"
		>
			<HStack spacing={2} mb={5}>
				<BookCatalogIcon colorStroke="customViolet" />
				<Text fontSize="18px" color="customViolet">
					Каталог
				</Text>
			</HStack>
			<VStack align="start" spacing={5} paddingY="6px">
				{catalogMenu.map(item => {
					const isActive = activeSection === item.label
					const color = isActive ? "customViolet" : "customBlack"

					return (
						<HStack
							key={item.label}
							spacing={2}
							align="center"
							cursor="pointer"
							color={color}
							transition="all 0.3s ease-in-out"
							_hover={{ transform: "scale(1.02)", fontWeight: "600" }}
							onClick={() => {
								handleMenuClick(item.label)
								updateFilters(item.filter)
							}}
							w="full"
							justify="space-between"
						>
							<Text>{item.label}</Text>
							<ArrowRightIcon colorFill={color} />
						</HStack>
					)
				})}
			</VStack>
		</Box>
	)
}
