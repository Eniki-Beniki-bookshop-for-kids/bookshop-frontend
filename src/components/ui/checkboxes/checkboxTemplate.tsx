"use client"

import { Checkbox } from "@chakra-ui/react"
import { useState } from "react"
import { CheckboxTemplateProps } from "../../../types/propsInterfaces"

export const CheckboxTemplate = ({
	isChecked = false,
	onChange,
	...props
}: CheckboxTemplateProps) => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<Checkbox
			isChecked={isChecked}
			onChange={e => onChange?.(e.target.checked)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			sx={{
				// Стилі для контейнера чекбокса
				".chakra-checkbox__control": {
					width: "18px",
					height: "18px",
					borderRadius: "4px",
					border: "2px solid",
					borderColor: isChecked
						? "customViolet"
						: isHovered
						? "customLavender"
						: "customVeryLightGray",
					background: isChecked
						? "customViolet"
						: isHovered
						? "customLavender"
						: "transparent",
					transition: "all 0.2s ease-in-out",
				},
				// Стилі для вибраного стану
				".chakra-checkbox__control[data-checked]": {
					background: "customViolet",
					borderColor: "customViolet",
				},
				// Стилі для галочки (вбудованої в Chakra UI)
				".chakra-checkbox__control[data-checked] svg": {
					color: "#FFF",
					stroke: "#FFF",
					strokeWidth: "2px",
				},
			}}
			{...props}
		/>
	)
}
