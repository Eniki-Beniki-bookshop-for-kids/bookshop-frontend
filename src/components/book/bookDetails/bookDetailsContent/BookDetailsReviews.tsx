// src/components/book/bookDetails/bookDetailsContent/BookDetailsReviews.tsx
"use client"

import { CommentIcon } from "@/components/ui"
import { useModal } from "@/context/ModalContext"
import { Book } from "@/types/models"
import { Button, HStack, VStack } from "@chakra-ui/react"
import { BookDetailsReviewList } from "./BookDetailsReviewList"
import { BookDetailsSectionName } from "./BookDetailsSectionName"

export const BookDetailsReviews = ({ book }: { book: Book }) => {
	const { reviews } = book

	const countReviews = reviews.length
	const { openModal } = useModal()

	return (
		<VStack align="start" spacing={4} w="full">
			<HStack w="full" justify="space-between">
				{countReviews > 0 ? (
					<BookDetailsSectionName text={`Відгуки (${reviews.length})`} />
				) : (
					<BookDetailsSectionName text="Відгуки відсутні" />
				)}
				<Button
					variant="link"
					fontSize={{ base: "12px", lg: "14px", xl: "16px" }}
					color="customDarkGray"
					borderRadius={0}
					fontWeight={400}
					_hover={{ transform: "scale(1.02)" }}
					onClick={() => openModal("comment", { book })}
					leftIcon={<CommentIcon />}
				>
					Написати відгук
				</Button>
			</HStack>

			{countReviews > 0 && <BookDetailsReviewList reviews={reviews} />}
		</VStack>
	)
}
