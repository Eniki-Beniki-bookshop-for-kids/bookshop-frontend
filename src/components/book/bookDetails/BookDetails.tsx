// src/components/book/bookDetails/BookDetails.tsx
"use client"

import { Loader } from "@/components"
import { useBooks } from "@/hooks"
import { Book } from "@/types/models"
import { SimpleGrid, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
// import { BookDetailsContent } from "./BookDetailsContent"
// import { BookDetailsDeliveryInfo } from "./BookDetailsDeliveryInfo"
import { BookDetailsImages } from "./BookDetailsImages"

interface BookDetailsProps {
	bookId: string
}

export const BookDetails = ({ bookId }: BookDetailsProps) => {
	const { fetchBookById, isLoading, error } = useBooks()
	const [book, setBook] = useState<Book | null>(null)

	useEffect(() => {
		const loadBook = async () => {
			try {
				const fetchedBook = await fetchBookById(bookId)
				setBook(fetchedBook)
			} catch {
				throw new Error("Failed to fetch book")
			}
		}
		loadBook()
	}, [bookId, fetchBookById])

	if (error) {
		console.error(`Не вдалося завантажити книгу з ID:${bookId}`, error)
		throw new Error(`Не вдалося завантажити книгу з ID:${bookId}`)
	}

	return (
		<VStack>
			{isLoading && (
				<Loader isLoading={isLoading} variant="metronome" size="100" />
			)}
			{!isLoading && (
				<SimpleGrid
					columns={{ base: 1, md: 2, lg: 3 }}
					spacing={8}
					w="full"
					maxW="1200px"
				>
					<BookDetailsImages book={book} />
					{/* <BookDetailsDeliveryInfo /> */}
					{/* <BookDetailsContent book={book} /> */}
				</SimpleGrid>
			)}
		</VStack>
	)
}
