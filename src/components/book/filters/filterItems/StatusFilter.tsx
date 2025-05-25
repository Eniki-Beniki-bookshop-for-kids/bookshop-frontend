// src/components/book/filters/filterItems/StatusFilter.tsx
"use client"

import { MultipleCheckboxTemplate } from "@/components/ui"
import { useFilter } from "@/context/FilterContext"
import { statusOptions } from "@/types/constants"
import { VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FilterTitle } from "./FilterTitle"

export const StatusFilter = () => {
	const { filters, updateFilters } = useFilter()
	const [selectedStatuses, setSelectedStatuses] = useState<string[]>(
		filters.status || [],
	)
	const [isExpanded, setIsExpanded] = useState(true)

	const handleChange = (value: string, checked: boolean) => {
		const newStatuses = checked
			? [...selectedStatuses, value]
			: selectedStatuses.filter(s => s !== value)
		setSelectedStatuses(newStatuses)
		updateFilters({ status: newStatuses.length > 0 ? newStatuses : undefined })
	}

	useEffect(() => {
		setSelectedStatuses(filters.status || [])
	}, [filters.status])

	return (
		<VStack align="start" spacing={5}>
			<FilterTitle
				toggleDescription={() => setIsExpanded(!isExpanded)}
				isExpanded={isExpanded}
				title="Статус книги"
			/>
			<VStack align="start" spacing={2}>
				{isExpanded &&
					statusOptions.map(option => (
						<MultipleCheckboxTemplate
							key={option.value}
							label={option.label}
							isChecked={selectedStatuses.includes(option.value as string)}
							onChange={checked =>
								handleChange(option.value as string, checked)
							}
						/>
					))}
			</VStack>
		</VStack>
	)
}
