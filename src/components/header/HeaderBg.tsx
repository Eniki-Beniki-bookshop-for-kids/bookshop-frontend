import { Box } from "@chakra-ui/react"
import { Wave } from "./Wave"

export const HeaderBg = () => {
	return (
		<Box
			position="absolute"
			top="0"
			left="0"
			width="100%"
			height="100%"
			zIndex="-1"
		>
			<Wave />
		</Box>
	)
}
