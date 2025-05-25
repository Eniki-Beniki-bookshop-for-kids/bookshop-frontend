// src/components/book/filters/FilterBooks.tsx

"use client"

import { BookFilters } from "@/types/interfaces"
import { HStack } from "@chakra-ui/react"
import { FilterSidebar } from "./FilterSidebar"

interface FilterBooksProps {
	initialFilter: string
}

export const FilterBooks = ({ initialFilter }: FilterBooksProps) => {
	const handleFilterChange = (filters: BookFilters) => {
		// Логіка буде пізніше
		console.log(initialFilter)
		console.log(filters)
	}

	return (
		<HStack spacing={{ base: 4, md: 6, lg: 8 }}>
			<FilterSidebar onFilterChange={handleFilterChange} />
		</HStack>
	)
}
