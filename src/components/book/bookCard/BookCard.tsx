// src/components/book/BookCard.tsx
"use client"

import { Book } from "@/types/models"
import { getBookMarker, getGenreSlug } from "@/utils/books"
import { HStack, Text, VStack } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { BookBadge } from "./BookBadge"
import { BookImage } from "./BookImage"
import { BookPrice } from "./BookPrice"
import { BookRating } from "./BookRating"

interface BookCardProps {
	book: Book
}

export const BookCard = ({ book }: BookCardProps) => {
	const router = useRouter()
	const marker = getBookMarker(book)
	const { bookId, discount, genre, title, author, reviews } = book

	const hasDiscount = discount > 0
	const discountCalc = hasDiscount ? -Math.round(discount * 100) : 0
	const genreSlug = getGenreSlug(genre)

	return (
		<VStack
			spacing={3}
			align="start"
			w="auto"
			h="auto"
			cursor="pointer"
			onClick={() => router.push(`/catalog/book/${genreSlug}/${bookId}`)}
			_hover={{ transform: "scale(1.02, 1.02)", transformOrigin: "top left" }}
			transition="all 0.2s"
		>
			<VStack
				position="relative"
				justifyContent="start"
				align="start"
				w="full"
				h="full"
				bg="#FFF"
				rounded="20px"
				p={2}
			>
				<HStack justifySelf="flex-start" spacing={2}>
					{hasDiscount && <BookBadge text={`${discountCalc.toString()}%`} />}
					{marker && <BookBadge text={marker} />}
					{!marker && !hasDiscount && <BookBadge />}
				</HStack>
				<BookImage book={book} />
			</VStack>

			<VStack align="start" w="full" h="full" p={0} spacing={1}>
				<Text fontSize="20px" color="customDarkGray">
					{title}
				</Text>
				<Text fontSize="18px" color="customGray">
					{author}
				</Text>
				<BookRating reviews={reviews} />
				<BookPrice book={book} />
			</VStack>
		</VStack>
	)
}
