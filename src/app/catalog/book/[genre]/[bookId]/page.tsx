// src/app/catalog/book/[genre]/[bookId]/page.tsx
import { BookDetails, GenreBooksCarousel } from "@/components/book"
import { VStack } from "@chakra-ui/react"

interface BookPageProps {
	params: Promise<{ genre: string; bookId: string }>
}

export default async function BookPage({ params }: BookPageProps) {
	const { genre, bookId } = await params

	return (
		<VStack w="full" align="start" spacing={{ base: "60px", md: "120px" }}>
			<BookDetails bookId={bookId} />
			<GenreBooksCarousel genre={genre} />
		</VStack>
	)
}
