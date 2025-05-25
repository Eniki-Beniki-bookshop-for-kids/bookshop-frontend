// src/components/book/filters/FilterSidebar.tsx
"use client"

import { BookFilters } from "@/types/interfaces"
import { HStack, Text, VStack } from "@chakra-ui/react"
import { FilterIcon } from "../../ui"
import { PriceFilter, StatusFilter } from "./filterItems"

interface FilterSidebarProps {
	onFilterChange: (filters: BookFilters) => void
}

export const FilterSidebar = ({ onFilterChange }: FilterSidebarProps) => {
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
			<StatusFilter onFilterChange={onFilterChange} />
			<PriceFilter onFilterChange={onFilterChange} />
		</VStack>
	)
}
