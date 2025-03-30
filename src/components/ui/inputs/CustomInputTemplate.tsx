"use client"

import { useInputLogic } from "@/hooks"
import { CustomInputProps } from "@/types/propsInterfaces"
import {
	FormControl,
	FormErrorMessage,
	Input,
	InputGroup,
} from "@chakra-ui/react"
import { FC } from "react"
import { InputDate } from "./InputDate"
import { InputPassword } from "./InputPassword"
import { InputPhone } from "./InputPhone"

const commonInputStyles = {
	_placeholder: { color: "customLightGray" },
	height: "auto",
	padding: "18px",
	color: "customBlack",
	borderRadius: "30px",
	borderColor: "customWhite",
	bg: "customWhite",
}

export const CustomInputTemplate: FC<CustomInputProps> = ({
	type,
	placeholder,
	value,
	onChange,
	error,
	mb = 0,
	mt = 0,
	pr = "18px",
}) => {
	const {
		inputRef,
		inputType,
		isPasswordField,
		togglePasswordVisibility,
		handleIconClick,
	} = useInputLogic(type)

	return (
		<FormControl isInvalid={!!error} position="relative" mb={mb} mt={mt}>
			<InputGroup>
				<Input
					ref={inputRef}
					type={inputType}
					placeholder={placeholder}
					value={value || ""}
					onChange={onChange}
					{...commonInputStyles}
					focusBorderColor="customViolet"
					pr={pr}
					pl={type === "tel" ? "100px" : "18px"}
					sx={{
						...(type === "date" && {
							"::-webkit-calendar-picker-indicator": {
								display: "none",
							},
						}),
					}}
				/>
				{isPasswordField && (
					<InputPassword togglePasswordVisibility={togglePasswordVisibility} />
				)}
				{type === "date" && <InputDate onClick={handleIconClick} />}
				{type === "tel" && <InputPhone />}
			</InputGroup>
			<FormErrorMessage
				fontSize="12px"
				color="red"
				position="absolute"
				top="100%"
				left={5}
				mt={0}
				zIndex={1}
			>
				{error}
			</FormErrorMessage>
		</FormControl>
	)
}
