// src/components/book/bookDetails/bookDetailsContent/BookDetailsSectionName.tsx
import { Text } from "@chakra-ui/react"

export const BookDetailsSectionName = ({ text }: { text: string }) => {
	return (
		<Text as="h2" fontSize={{ base: "20px", lg: "24px", xl: "28px" }}>
			{text}
		</Text>
	)
}
