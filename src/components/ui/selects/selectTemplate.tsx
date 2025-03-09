"use client"

import { Box, Select } from "@chakra-ui/react"
import { useState } from "react"
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md" // Іконки для стрілок
import { SelectTemplateProps } from "../../../types/propsInterfaces"

export const SelectTemplate = ({
	placeholder = "Сортування",
	options,
	onChange,
	defaultValue,
}: SelectTemplateProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedValue, setSelectedValue] = useState(defaultValue || "")

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value
		setSelectedValue(value)
		onChange?.(value)
	}

	// логіка для іконки (змінюємо стрілку при відкритті)
	const handleFocus = () => setIsOpen(true)
	const handleBlur = () => setIsOpen(false)

	return (
		<Box position="relative" width="100%">
			<Select
				placeholder={placeholder}
				value={selectedValue}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				size="md"
				variant="outline"
				icon={isOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
				sx={{
					borderRadius: "8px",
					borderColor: "customVeryLightGray",
					backgroundColor: "#FFF",
					fontSize: "16px",
					_placeholder: {
						color: "customBlack",
					},
					_focus: {
						borderColor: "customLavender",
						boxShadow: "none",
					},
					"&:hover": {
						borderColor: "customLavender",
						cursor: "pointer",
					},
				}}
			>
				{options.map(option => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</Select>
		</Box>
	)
}
