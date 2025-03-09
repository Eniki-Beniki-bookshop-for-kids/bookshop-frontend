"use client"

import { RadioCheckboxTemplate } from "../ui"

export default function RadioCheckBoxUI() {
	const items = [
		{ label: "Видавництво Старого Лева 1", value: "1" },
		{ label: "Видавництво Старого Лева 2", value: "2" },
		{ label: "Видавництво Старого Лева 3", value: "3" },
	]

	return (
		<RadioCheckboxTemplate
			items={items}
			name="radio-group"
			defaultValue="1"
			onChange={value => console.log("Selected value:", value)}
		/>
	)
}
