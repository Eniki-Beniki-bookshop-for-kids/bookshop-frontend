"use client"

import {
	Box,
	RangeSlider,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	RangeSliderTrack,
} from "@chakra-ui/react"

interface RangeSliderTemplateProps {
	min?: number
	max?: number
	defaultValue?: [number, number]
	value?: [number, number]
	onChange?: (value: [number, number]) => void
}

export const RangeSliderTemplate = ({
	min = 0,
	max = 10000,
	defaultValue = [0, 10000],
	value,
	onChange,
}: RangeSliderTemplateProps) => {
	const controlledValue = value || defaultValue

	const handleChange = (newValues: [number, number]) => {
		onChange?.(newValues)
	}

	return (
		<Box width="full" maxWidth="400px" px={2}>
			<RangeSlider
				aria-label={["min", "max"]!}
				min={min}
				max={max}
				value={controlledValue}
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
				{/* <RangeSliderMark
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
				</RangeSliderMark> */}
			</RangeSlider>
		</Box>
	)
}
