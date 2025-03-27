import {
	FormControl,
	FormErrorMessage,
	Select,
	SelectProps,
} from "@chakra-ui/react"
import { FC, ReactNode } from "react"

export interface CustomSelectTemplateProps extends SelectProps {
	error?: string
	mb?: number | string
	mt?: number | string
	children?: ReactNode
}

export const CustomSelectTemplate: FC<CustomSelectTemplateProps> = ({
	error,
	mb = 0,
	mt = 0,
	children,
	...props
}) => {
	return (
		<FormControl isInvalid={!!error} position="relative" mb={mb} mt={mt}>
			<Select
				focusBorderColor="customViolet"
				bg="customWhite"
				borderRadius="30px"
				{...props}
			>
				{children}
			</Select>
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
