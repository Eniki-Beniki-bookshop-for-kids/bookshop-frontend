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
import { DateInputIcon } from "./DateInputIcon"
import { PasswordInputIcon } from "./PasswordInputIcon"

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
					sx={{
						...(type === "date" && {
							"::-webkit-calendar-picker-indicator": {
								display: "none",
							},
						}),
					}}
				/>
				{isPasswordField && (
					<PasswordInputIcon
						togglePasswordVisibility={togglePasswordVisibility}
					/>
				)}
				{type === "date" && <DateInputIcon onClick={handleIconClick} />}
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
