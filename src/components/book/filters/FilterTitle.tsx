// src/components/book/filters/FilterSidebar.tsx
"use client"

import { HStack, Text } from "@chakra-ui/react"

export const FilterTitle = () => {
	return (
		<HStack>
			<Text fontSize={{ base: "14px", md: "16px", lg: "18px" }}>
				Статус товару
			</Text>
		</HStack>
	)
}
