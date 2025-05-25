// src/utils/books/checkFilters.ts
"use client"

import { MultipleCheckboxTemplate } from "@/components/ui"
import { useFilter } from "@/context/FilterContext"
import { ageOptions } from "@/types/constants"
import { TargetAges } from "@/types/models"
import { VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FilterTitle } from "./FilterTitle"

export const AgeFilter = () => {
	const { filters, updateFilters } = useFilter()
	const [selectedAges, setSelectedAges] = useState<TargetAges[]>(
		filters.targetAges || [],
	)
	const [isExpanded, setIsExpanded] = useState(true)

	const handleChange = (value: TargetAges, checked: boolean) => {
		const newAges = checked
			? [...selectedAges, value]
			: selectedAges.filter(age => age !== value)
		setSelectedAges(newAges)
		updateFilters({ targetAges: newAges.length > 0 ? newAges : undefined })
	}

	useEffect(() => {
		setSelectedAges(filters.targetAges || [])
	}, [filters.targetAges])

	return (
		<VStack align="start" spacing={5}>
			<FilterTitle
				toggleDescription={() => setIsExpanded(!isExpanded)}
				isExpanded={isExpanded}
				title="Вік"
			/>
			<VStack align="start" spacing={2}>
				{isExpanded &&
					ageOptions.map(option => (
						<MultipleCheckboxTemplate
							key={option.value}
							label={option.label}
							isChecked={selectedAges.includes(option.value as TargetAges)}
							onChange={checked =>
								handleChange(option.value as TargetAges, checked)
							}
						/>
					))}
			</VStack>
		</VStack>
	)
}
