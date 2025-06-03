// src/components/book/filters/FilterBooks.tsx
"use client"

import { FilterProvider } from "@/context/FilterContext"
import { HStack } from "@chakra-ui/react"
import { FilterBookGrid } from "./FilterBookGrid"
import { FilterSidebar } from "./FilterSidebar"

export const FilterBooks = ({ initialFilter }: { initialFilter: string }) => {
	return (
		<FilterProvider initialFilter={initialFilter}>
			<HStack spacing={{ base: 4, md: 6, lg: 8 }}>
				<FilterSidebar />
				<FilterBookGrid initialFilter={initialFilter} />
			</HStack>
		</FilterProvider>
	)
}
