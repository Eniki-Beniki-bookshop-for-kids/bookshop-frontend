import { AccountSelectTemplateProps } from "@/types/propsInterfaces"
import { Box, FormControl, FormErrorMessage, Select } from "@chakra-ui/react"
import { FC } from "react"

export const AccountSelectTemplate: FC<AccountSelectTemplateProps> = ({
	error,
	mb = 0,
	mt = 0,
	children,
	...props
}) => {
	return (
		<FormControl isInvalid={!!error} position="relative" mb={mb} mt={mt}>
			<Box
				padding="18px 18px 18px 0px"
				bg="customWhite"
				borderRadius="30px"
				width="100%"
				border="1px solid"
				borderColor="customWhite"
				_focusWithin={{
					borderColor: "customViolet",
				}}
			>
				<Select focusBorderColor="transparent" cursor="pointer" {...props}>
					{children}
				</Select>
			</Box>
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
