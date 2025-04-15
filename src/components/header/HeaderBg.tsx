//src/components/header/HeaderBg.tsx
import { Box } from "@chakra-ui/react"
import { Wave } from "./Wave"

export const HeaderBg = ({
	headerType = "full",
}: {
	headerType?: "full" | "minimal"
}) => {
	const height = headerType === "minimal" ? 153 : 258
	return (
		<Box
			position="absolute"
			top="0"
			left="0"
			width="100%"
			height={`${height}px`}
			zIndex="0"
		>
			<Wave headerType={headerType} />
		</Box>
	)
}
