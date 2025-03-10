"use client"

import {
	Box,
	RangeSlider,
	RangeSliderFilledTrack,
	RangeSliderMark,
	RangeSliderThumb,
	RangeSliderTrack,
} from "@chakra-ui/react"
import { useState } from "react"
import { RangeSliderTemplateProps } from "../../../types/propsInterfaces"

export const RangeSliderTemplate = ({
	min = 0,
	max = 10000,
	defaultValue = [0, 2000],
	onChange,
}: RangeSliderTemplateProps) => {
	const [values, setValues] = useState<[number, number]>(defaultValue)

	const handleChange = (newValues: [number, number]) => {
		setValues(newValues)
		onChange?.(newValues)
	}

	return (
		<Box p={4} width="sm">
			<RangeSlider
				aria-label={["min", "max"]!}
				min={min}
				max={max}
				value={values}
				onChange={handleChange}
			>
				{/* Трек-лінія */}
				<RangeSliderTrack bg="customVeryLightGray" height="2px">
					<RangeSliderFilledTrack bg="customLavender" />
				</RangeSliderTrack>

				{/* Регулятори */}
				<RangeSliderThumb
					index={0}
					bg="customViolet"
					width="20px"
					height="20px"
				/>
				<RangeSliderThumb
					index={1}
					bg="customViolet"
					width="20px"
					height="20px"
				/>

				{/* Мітки (цифри знизу) */}
				<RangeSliderMark
					value={values[0]}
					mt="2"
					ml="-2.5"
					fontSize="sm"
					color="customDarkGray"
				>
					{values[0]}
				</RangeSliderMark>
				<RangeSliderMark
					value={values[1]}
					mt="2"
					ml="-2.5"
					fontSize="sm"
					color="customDarkGray"
				>
					{values[1]}
				</RangeSliderMark>
			</RangeSlider>
		</Box>
	)
}
