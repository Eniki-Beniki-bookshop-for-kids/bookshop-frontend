// src/components/book/BookBadge.tsx
import { Badge } from "@chakra-ui/react"

export const BookBadge = ({ text }: { text: string }) => {
	return (
		<Badge
			rounded="30px"
			px={2}
			py={1}
			bg="customViolet"
			color="#FFF"
			fontSize="14px"
			fontWeight="400"
		>
			{text}
		</Badge>
	)
}
