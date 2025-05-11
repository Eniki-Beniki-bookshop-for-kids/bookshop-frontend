// src/components/book/BookCarousel.tsx
"use client"

import { Book } from "@/types/models"
import { Box } from "@chakra-ui/react"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { PageTitle } from "../PageTitle"
import { BookCard } from "./bookCard"

interface BookCarouselProps {
	title: string
	books: Book[]
}

export const BookCarousel = ({ title, books }: BookCarouselProps) => {
	if (!books || books.length === 0) return null

	return (
		<Box w="full">
			<PageTitle title={title} mb={9} />
			<Swiper
				modules={[Navigation]}
				spaceBetween={16}
				slidesPerView={4}
				loop={true}
				navigation
			>
				{books.map(book => (
					<SwiperSlide key={book.bookId}>
						<BookCard book={book} />
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	)
}
