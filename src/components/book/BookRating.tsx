// src/components/book/BookRating.tsx
import { Book } from "@/types/models"
import { averageRating } from "@/utils/books"
import { HStack, Icon, Text } from "@chakra-ui/react"
import { FaStar } from "react-icons/fa"
import { CommentIcon } from "../ui"

interface BookCardProps {
	book: Book
}

export const BookRating = ({ book }: BookCardProps) => {
	return (
		<HStack spacing={2}>
			{[...Array(5)].map((_, i) => (
				<Icon
					key={i}
					as={FaStar}
					color={
						i < Math.round(averageRating(book) || 0)
							? "customYellow"
							: "customLightGray"
					}
					boxSize={4}
				/>
			))}
			<CommentIcon size={14} colorFill="customDarkGray" />
			<Text fontSize="16px" color="customDarkGray">
				{book.reviews.length}
			</Text>
		</HStack>
	)
}
