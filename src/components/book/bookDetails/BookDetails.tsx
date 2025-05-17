// src/components/book/bookDetails/BookDetails.tsx
"use client"

import { Loader } from "@/components"
import { useBooks } from "@/hooks"
import { Book } from "@/types/models"
import { Grid, GridItem, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { BookDetailsContent } from "./BookDetailsContent"
import { BookDetailsDeliveryInfo } from "./BookDetailsDeliveryInfo"
import { BookDetailsImages } from "./BookDetailsImages"
// import { BookDetailsContent } from "./BookDetailsContent"
// import { BookDetailsDeliveryInfo } from "./BookDetailsDeliveryInfo"

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
				<Grid
					templateAreas={`"img details" "info details"`}
					gridTemplateRows={"auto auto"}
					gridTemplateColumns={"35% auto"}
					gap="32px"
					px={{ sm: "16px", md: "0px" }}
					pb="120px"
					maxW="1440px"
					w="full"
				>
					<GridItem area={"img"} bg="#FFF" borderRadius="30px" minW="300px">
						<BookDetailsImages book={book} />
					</GridItem>
					<GridItem area={"info"} bg="#FFF" borderRadius="30px" minW="300px">
						<BookDetailsDeliveryInfo />
					</GridItem>
					<GridItem area={"details"} bg="#FFF" borderRadius="30px">
						<BookDetailsContent book={book} />
					</GridItem>
				</Grid>
			)}
		</VStack>
	)
}
