// src/components/book/bookDetails/bookDetailsContent/BookDetailsReviews.tsx
"use client"

import { Book } from "@/types/models"
import { HStack, VStack } from "@chakra-ui/react"
import { BookDetailsSectionName } from "./BookDetailsSectionName"

interface BookDetailsReviewsProps {
	book: Book
}

export const BookDetailsReviews = ({ book }: BookDetailsReviewsProps) => {
	const { reviews } = book
	const countReviews = reviews.length

	return (
		<VStack align="start" spacing={4} w="full">
			<HStack w="full" justify="space-between">
				{countReviews > 0 ? (
					<BookDetailsSectionName text={`Відгуки (${reviews.length})`} />
				) : (
					<BookDetailsSectionName text="Відгуки відсутні" />
				)}
			</HStack>
		</VStack>
	)
}
