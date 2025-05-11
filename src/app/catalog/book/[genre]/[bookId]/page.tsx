// src/app/catalog/book/[genre]/[bookId]/page.tsx
import { BookDetails } from "@/components/book"
import { VStack } from "@chakra-ui/react"

interface BookPageProps {
	params: Promise<{ genre: string; bookId: string }>
}

export default async function BookPage({ params }: BookPageProps) {
	const { bookId } = await params

	return (
		<VStack>
			<BookDetails bookId={bookId} />
		</VStack>
	)
}
