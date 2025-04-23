// src/components/catalog/CatalogSidebar.tsx
"use client"

import { useBooks } from "@/hooks"
import { catalogMenu } from "@/types/constants"
import { Box, VStack } from "@chakra-ui/react"
import { MenuItem } from "./MenuItem"

export const CatalogSidebar = () => {
	const { updateFilters } = useBooks()

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
			<VStack align="start" spacing={5} paddingY="6px">
				{catalogMenu.map(item => (
					<MenuItem
						key={item.label}
						item={item}
						onUpdateFilters={updateFilters}
					/>
				))}
			</VStack>
		</Box>
	)
}
