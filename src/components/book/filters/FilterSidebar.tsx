// src/components/book/filters/FilterSidebar.tsx
"use client"

import { FilterIcon } from "@/components/ui"
import { useFilter } from "@/context/FilterContext"
import { Button, HStack, Text, VStack } from "@chakra-ui/react"
import { AgeFilter, PriceFilter, StatusFilter } from "./filterItems"
import { useEffect } from "react"

export const FilterSidebar = ({ initialFilter }: { initialFilter: string }) => {
	const { filters, resetFilters } = useFilter()

	useEffect(() => {
		console.log(initialFilter)
		console.log(filters)
	}, [initialFilter, filters])

	return (
		<VStack
			align="stretch"
			spacing={{ base: 4, md: 6, lg: 8 }}
			px={4}
			py={5}
			w={{ base: "240px", lg: "296px" }}
			bg="#FFF"
			borderRadius={20}
			maxW="400px"
		>
			<HStack align="center">
				<FilterIcon />
				<Text fontSize={{ base: "20px", lg: "24px" }}>Фільтри</Text>
			</HStack>
			<Button onClick={resetFilters} colorScheme="red" variant="outline">
				Скинути всі фільтри
			</Button>
			<StatusFilter />
			<PriceFilter />
			<AgeFilter />
		</VStack>
	)
}
