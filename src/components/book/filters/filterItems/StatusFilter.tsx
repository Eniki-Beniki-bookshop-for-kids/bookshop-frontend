// src/components/book/filters/filterItems/StatusFilter.tsx
"use client"

import { MultipleCheckboxTemplate } from "@/components/ui"
import { statusOptions } from "@/types/constants"
import { BookFilters } from "@/types/interfaces"
import { VStack } from "@chakra-ui/react"
import { useState } from "react"
import { FilterTitle } from "./FilterTitle"

export const StatusFilter = ({
	onFilterChange,
}: {
	onFilterChange: (filters: BookFilters) => void
}) => {
	const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])
	const [isExpanded, setIsExpanded] = useState(true)

	const handleChange = (value: string, checked: boolean) => {
		const newStatuses = checked
			? [...selectedStatuses, value]
			: selectedStatuses.filter(s => s !== value)
		setSelectedStatuses(newStatuses)

		// Комбінуємо фільтри з statusOptions
		const filters: BookFilters = newStatuses.reduce((acc, status) => {
			const option = statusOptions.find(opt => opt.value === status)
			return { ...acc, ...option?.filter } as BookFilters
		}, {} as BookFilters)

		onFilterChange(filters)
	}

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
							isChecked={selectedStatuses.includes(option.value)}
							onChange={checked => handleChange(option.value, checked)}
						/>
					))}
			</VStack>
		</VStack>
	)
}
