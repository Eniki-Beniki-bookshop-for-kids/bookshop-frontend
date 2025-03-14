"use client"

import { CustomInputProps } from "@/types/propsInterfaces"
import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react"
import { FC } from "react"

export const commonInputStyles = {
	_placeholder: { color: "customLightGray" },
	height: "auto",
	padding: 5,
	color: "customBlack",
	borderRadius: "30px",

	borderColor: "customWhite",
	_focus: { borderColor: "customViolet" },
	bg: "customWhite",
}

export const InputTemplate: FC<CustomInputProps> = ({
	type,
	placeholder,
	value,
	onChange,
	error,
	mb = 0,
	mt = 0,
}) => {
	return (
		<FormControl isInvalid={!!error} position="relative" mb={mb} mt={mt}>
			<Input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				{...commonInputStyles}
			/>
			<FormErrorMessage
				fontSize="12px"
				color="red"
				position="absolute"
				top="100%"
				right={5}
				m={0}
				mt={1}
			>
				{error}
			</FormErrorMessage>
		</FormControl>
	)
}
