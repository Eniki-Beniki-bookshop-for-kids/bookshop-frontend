// src/components/book/BookPrice.tsx
import { Book } from "@/types/models"
import { HStack, Text } from "@chakra-ui/react"

interface BookCardProps {
	book: Book
}

export const BookPrice = ({ book }: BookCardProps) => {
	const hasDiscount = book.discount > 0
	const discountedPrice = hasDiscount
		? Math.round(book.price * (1 - book.discount))
		: book.price

	return (
		<HStack spacing={2}>
			{hasDiscount ? (
				<>
					<Text
						fontSize="20px"
						color="customGray"
						textDecoration="line-through"
					>
						{book.price} ₴
					</Text>
					<Text fontSize="20px" color="customDarkGray" fontWeight="bold">
						{discountedPrice} ₴
					</Text>
				</>
			) : (
				<Text fontSize="20px" color="customDarkGray">
					{book.price} ₴
				</Text>
			)}
		</HStack>
	)
}
