"use client"

import { Box, useRadio, useRadioGroup, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { RadioCheckboxTemplateProps } from "../../../types/propsInterfaces"

export const RadioCheckboxTemplate = ({
	items,
	name,
	defaultValue,
	onChange,
}: RadioCheckboxTemplateProps) => {
	const { getRootProps, getRadioProps } = useRadioGroup({
		name,
		defaultValue,
		onChange,
	})

	const group = getRootProps()

	return (
		<VStack {...group} spacing={4} align="flex-start">
			{items.map(item => {
				const radio = getRadioProps({ value: item.value })
				return (
					<Box key={item.value} className="flex items-center gap-5">
						<CustomRadio {...radio} />
						<Box>{item.label}</Box>
					</Box>
				)
			})}
		</VStack>
	)
}

// Компонент для окремої радіо-кнопки
import { UseRadioProps } from "@chakra-ui/react"

function CustomRadio(props: UseRadioProps) {
	const { getInputProps, getRadioProps, state } = useRadio(props)
	const [isHovered, setIsHovered] = useState(false)

	const input = getInputProps()
	const checkbox = getRadioProps()

	return (
		<Box as="label">
			<input {...input} />
			<Box
				{...checkbox}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				cursor="pointer"
				width="18px"
				height="18px"
				borderRadius="50%"
				border="2px solid"
				borderColor={
					state.isChecked
						? "customViolet" // обводка при вибраному стані
						: isHovered
						? "customLavender" // Ховер-ефект
						: "customVeryLightGray" // обводка при невибраному стані
				}
				background={
					state.isChecked
						? "#FFF" // фон при вибраному стані
						: isHovered
						? "customLavender" // Ховер-ефект
						: "transparent" // фон при невибраному стані
				}
				transition="all 0.2s ease-in-out"
				display="flex"
				alignItems="center"
				justifyContent="center"
				position="relative"
			>
				{state.isChecked && (
					<Box
						width="8px"
						height="8px"
						borderRadius="50%"
						background="customViolet" // внутрішній кружечок
					/>
				)}
			</Box>
		</Box>
	)
}
