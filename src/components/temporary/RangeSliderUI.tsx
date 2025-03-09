"use client"

import { RangeSliderTemplate } from "../ui"

export const RangeSliderUI = () => {
	return (
		<RangeSliderTemplate
			onChange={value => console.log("Range values:", value)}
		/>
	)
}
