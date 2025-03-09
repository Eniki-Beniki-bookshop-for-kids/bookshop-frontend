"use client"

import { Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { MultipleCheckboxTemplate } from "../ui"

export default function MultipleCheckBoxUI() {
	const [selectedItems, setSelectedItems] = useState<string[]>([])

	const items = [
		"Видавництво Старого Лева 1",
		"Видавництво Старого Лева 2",
		"Видавництво Старого Лева 3",
	]

	const handleCheckboxChange = (item: string, checked: boolean) => {
		if (checked) {
			setSelectedItems([...selectedItems, item])
		} else {
			setSelectedItems(selectedItems.filter(i => i !== item))
		}
	}

	return (
		<VStack align="start" spacing={4}>
			{items.map(item => (
				<label key={item} className="flex items-center gap-5">
					<MultipleCheckboxTemplate
						isChecked={selectedItems.includes(item)}
						onChange={checked => handleCheckboxChange(item, checked)}
					/>
					<Text>{item}</Text>
				</label>
			))}
		</VStack>
	)
}
