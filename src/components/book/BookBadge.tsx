// src/components/book/BookBadge.tsx
import { Badge } from "@chakra-ui/react"

export const BookBadge = ({ text }: { text?: string }) => {
	const bg = text ? "customViolet" : "#FFF"
	return (
		<Badge
			rounded="30px"
			px={2}
			py={1}
			bg={bg}
			color="#FFF"
			fontSize="14px"
			fontWeight="400"
		>
			{text ? text : "No badge"}
		</Badge>
	)
}
