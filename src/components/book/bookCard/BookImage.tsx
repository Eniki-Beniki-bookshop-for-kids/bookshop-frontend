// src/components/book/BookImage.tsx
import { Book } from "@/types/models"
import { Box, Image } from "@chakra-ui/react"
import { BookFallback } from "../BookFallback"

interface BookCardProps {
	book: Book
}

export const BookImage = ({ book }: BookCardProps) => {
	return (
		<Box
			w="full"
			h="249px"
			pt={2}
			pb={10}
			px={{ base: 2, md: 4, lg: 8, xl: 12 }}
			rounded="30px"
		>
			<Image
				src={book.images && book.images.length > 0 ? book.images[0] : undefined}
				alt={book.title}
				objectFit="cover"
				w="full"
				h="full"
				fallback={<BookFallback />}
			/>
		</Box>
	)
}
