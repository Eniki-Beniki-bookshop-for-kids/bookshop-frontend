"use client"

import { SelectTemplate } from "../ui"

export const SelectUI = () => {
	const options = [
		{ value: "popularity", label: "За популярністю" },
		{ value: "newest", label: "За новизною" },
		{ value: "discount", label: "За знижкою" },
		{ value: "priceAsc", label: "Від дешевих до дорогих" },
		{ value: "priceDesc", label: "Від дорогих до дешевих" },
	]

	return (
		<SelectTemplate
			options={options}
			onChange={value => console.log("Selected value:", value)}
		/>
	)
}
