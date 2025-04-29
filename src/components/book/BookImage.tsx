// src/components/book/BookImage.tsx
import { Book } from "@/types/models"
import { Box, Image } from "@chakra-ui/react"

interface BookCardProps {
	book: Book
}

export const BookImage = ({ book }: BookCardProps) => {
	return (
		<Box w="full" h="249px" pt={2} pb="44px" px="58px" rounded="30px">
			<Image
				src={book.images && book.images.length > 0 ? book.images[0] : undefined}
				alt={book.title}
				objectFit="cover"
				w="full"
				h="full"
				fallback={
					<Image
						src="https://dummyimage.com/300x400/9c9c9c/FFFFFF.png&text=No+photo"
						alt="Немає зображення"
						objectFit="cover"
						w="full"
						h="full"
					/>
				}
			/>
		</Box>
	)
}
