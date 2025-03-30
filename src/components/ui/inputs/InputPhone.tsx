import { HStack, InputLeftElement, Text } from "@chakra-ui/react"
import { FC } from "react"
import { FlagUkraine } from ".."

export const InputPhone: FC = () => (
	<InputLeftElement height="100%" display="flex">
		<HStack spacing={2} alignItems="center" pl="72px">
			<FlagUkraine />
			<Text pr={2} borderRight="1px" borderColor="customLightGray">
				+380
			</Text>
		</HStack>
	</InputLeftElement>
)
