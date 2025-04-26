// src/components/hero/HomeSidebarMenu.tsx
"use client"

import { useBooks } from "@/hooks"
import { homeSidebarMenu } from "@/types/constants"
import { Box, VStack } from "@chakra-ui/react"
import { MenuItem } from "./MenuItem"

export const HomeSidebarMenu = () => {
	const { updateFilters } = useBooks()

	return (
		<Box
			minWidth={{ md: "220px", lg: "296px" }}
			h="full"
			bg="#FFF"
			paddingY={8}
			paddingX={4}
			rounded="30px"
		>
			<VStack align="start" spacing={5} paddingY="6px">
				{homeSidebarMenu.map(item => (
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
