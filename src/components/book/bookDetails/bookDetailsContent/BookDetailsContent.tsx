// src/components/book/bookDetails/bookDetailsContent/BookDetailsContent.tsx
"use client"

import { Book } from "@/types/models"
import { Box, HStack, VStack } from "@chakra-ui/react"
import { BookDetailsActionBadge } from "./BookDetailsActionBadge"
import { BookDetailsDescription } from "./BookDetailsDescription"
import { BookDetailsFeatures } from "./BookDetailsFeatures"
import { BookDetailsHeader } from "./BookDetailsHeader"
import { BookDetailsReviews } from "./BookDetailsReviews"

interface BookDetailsContentProps {
	book: Book | null
}

export const BookDetailsContent = ({ book }: BookDetailsContentProps) => {
	if (!book) return null

	const { price, stockQuantity, discount } = book

	return (
		<HStack
			spacing={12}
			p={{ base: "16px", md: "32px" }}
			pb={12}
			align="start"
			justify="space-between"
			h="full"
			position="relative"
		>
			<VStack align="start" spacing={12} color="customBlack" w="full">
				<BookDetailsHeader book={book} />
				<BookDetailsDescription book={book} />
				<BookDetailsFeatures book={book} />
				<BookDetailsReviews book={book} />
			</VStack>
			<Box w="40%" position={{ base: "absolute", md: "relative" }} right="0%">
				<BookDetailsActionBadge
					price={price}
					stockQuantity={stockQuantity}
					discount={discount}
				/>
			</Box>
		</HStack>
	)
}
