// src/components/book/filters/filterItems/PriceFilter.tsx
"use client"

import { Loader } from "@/components/Loader"
import { ButtonTemplate, RangeSliderTemplate } from "@/components/ui"
import { useFilter } from "@/context/FilterContext"
import { usePriceRange } from "@/hooks"
import { HStack, Text, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FilterTitle } from "./FilterTitle"

export const PriceFilter = () => {
	const { filters, updateFilters } = useFilter()
	const { priceRange: fetchedRange, loading, error } = usePriceRange()
	const [isExpanded, setIsExpanded] = useState(true)
	const [priceRange, setPriceRange] = useState<[number, number]>(fetchedRange)

	useEffect(() => {
		if (!loading && !error) {
			setPriceRange(fetchedRange)
		}
	}, [fetchedRange, loading, error])

	const handleChange = (values: [number, number]) => {
		setPriceRange(values)
	}

	const handleSubmit = () => {
		updateFilters({ price: { min: priceRange[0], max: priceRange[1] } })
	}

	useEffect(() => {
		if (filters.price) {
			const { min = fetchedRange[0], max = fetchedRange[1] } = filters.price
			setPriceRange([min, max])
		} else {
			setPriceRange(fetchedRange)
		}
	}, [filters.price, fetchedRange])

	// для скидання priceRange при зміні filters (без натискання кнопки "Застосувати")
	useEffect(() => {
		if (Object.keys(filters).length === 0) {
			setPriceRange(fetchedRange)
		}
	}, [filters, fetchedRange])

	return (
		<VStack align="start" spacing={5}>
			<FilterTitle
				toggleDescription={() => setIsExpanded(!isExpanded)}
				isExpanded={isExpanded}
				title="Ціна"
			/>
			{loading && !error && <Loader isLoading={loading} variant="metronome" />}
			{!loading && error && (
				<Text fontSize={{ base: "14px", lg: "16px" }} color="red.500">
					{error}
				</Text>
			)}
			{isExpanded && !loading && !error && (
				<>
					<RangeSliderTemplate
						min={fetchedRange[0]}
						max={fetchedRange[1]}
						defaultValue={fetchedRange}
						value={priceRange}
						onChange={handleChange}
					/>
					<HStack w="full" justify="space-between">
						<Text
							fontSize={{ base: "14px", lg: "16px" }}
							color="customDarkGray"
						>
							{`${priceRange[0]} – ${priceRange[1]} грн`}
						</Text>
						<ButtonTemplate
							padding="10px"
							color="customBlack"
							borderColor="customViolet"
							borderWidth={1}
							bgColor="#FFFFFF"
							_hover={{
								backgroundColor: "customLavender",
								borderColor: "customViolet",
							}}
							hoverScale={1.02}
							onClick={handleSubmit}
						>
							Застосувати
						</ButtonTemplate>
					</HStack>
				</>
			)}
		</VStack>
	)
}
