"use client"

import { CustomInputProps } from "@/types/propsInterfaces"
import {
	FormControl,
	FormErrorMessage,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react"
import { FC, useState } from "react"
import { EyeToggleIconBtn } from ".."

export const commonInputStyles = {
	_placeholder: { color: "customLightGray" },
	height: "auto",
	padding: "18px",
	pr: "60px",
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
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(prev => !prev)
	}
	const isPasswordField = type === "password"
	const inputType = isPasswordField && isPasswordVisible ? "text" : type

	return (
		<FormControl isInvalid={!!error} position="relative" mb={mb} mt={mt}>
			<InputGroup>
				<Input
					type={inputType}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					{...commonInputStyles}
				/>
				{isPasswordField && (
					<InputRightElement
						height="100%"
						display="flex"
						alignItems="center"
						right="18px"
					>
						<EyeToggleIconBtn onClick={togglePasswordVisibility} />
					</InputRightElement>
				)}
			</InputGroup>
			<FormErrorMessage
				fontSize="12px"
				color="red"
				position="absolute"
				top="100%"
				left={5}
				mt={0}
			>
				{error}
			</FormErrorMessage>
		</FormControl>
	)
}
