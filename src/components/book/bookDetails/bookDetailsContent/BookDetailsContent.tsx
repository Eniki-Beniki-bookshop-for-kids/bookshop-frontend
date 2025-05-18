// src/components/book/bookDetails/bookDetailsContent/BookDetailsContent.tsx
"use client"

import { Book } from "@/types/models"
import { Box, HStack, VStack } from "@chakra-ui/react"
import { BookDetailsActionBadge } from "./BookDetailsActionBadge"
import { BookDetailsDescription } from "./BookDetailsDescription"
import { BookDetailsHeader } from "./BookDetailsHeader"

interface BookDetailsContentProps {
	book: Book | null
}

export const BookDetailsContent = ({ book }: BookDetailsContentProps) => {
	if (!book) return null

	const { price, stockQuantity, discount } = book

	return (
		<HStack
			spacing={12}
			p={8}
			pb={12}
			align="start"
			justify="space-between"
			h="full"
		>
			<VStack align="start" spacing={12} color="customBlack" w="full">
				<BookDetailsHeader book={book} />
				<BookDetailsDescription book={book} />
			</VStack>
			<Box w="40%">
				<BookDetailsActionBadge
					price={price}
					stockQuantity={stockQuantity}
					discount={discount}
				/>
			</Box>
		</HStack>
	)
}
