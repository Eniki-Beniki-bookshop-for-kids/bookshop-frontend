// src/components/book/BookSearchResult.tsx
"use client"

import { Book } from "@/types/models"
import { SimpleGrid, Text } from "@chakra-ui/react"
import { BookCard } from "../bookCard"

interface BookSearchResultProps {
	books: Book[]
	total: number
	itemsLoaded: number
}

export const BookSearchResult = ({
	books,
	total,
	itemsLoaded,
}: BookSearchResultProps) => {
	return (
		<>
			{books.length > 0 && (
				<>
					<Text
						fontSize="xl"
						fontWeight="bold"
						color="customDarkGray"
						alignSelf="start"
					>
						Результати пошуку ({total})
					</Text>

					<SimpleGrid
						columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
						spacing={4}
						w="full"
					>
						{books.slice(0, itemsLoaded).map(book => (
							<BookCard key={book.bookId} book={book} />
						))}
					</SimpleGrid>
				</>
			)}
		</>
	)
}
