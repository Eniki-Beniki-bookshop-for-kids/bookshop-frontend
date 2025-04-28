// src/app/catalog/book/[genre]/[bookId]/page.tsx
import { Text, VStack } from "@chakra-ui/react"

interface BookPageProps {
	params: Promise<{ genre: string; bookId: string }>
}

export default async function BookPage({ params }: BookPageProps) {
	const { genre, bookId } = await params

	return (
		<VStack spacing={4} py={8}>
			<Text fontSize="2xl" color="customDarkGray">
				Це сторінка для книги з ID: {bookId} (жанр: {genre})
			</Text>
		</VStack>
	)
}
