// src/components/book/bookDetails/GenreBooksCarousel.tsx
"use client"

import { BookCarousel } from "@/components/book/BookCarousel"
import { useBooks } from "@/hooks/useBooks"
import { Genre } from "@/types/models"
import { useEffect } from "react"

export const GenreBooksCarousel = ({ genre }: { genre: string }) => {
	const { books, fetchBooksByGenre } = useBooks()

	useEffect(() => {
		fetchBooksByGenre(genre)
	}, [genre, fetchBooksByGenre])

	const title =
		`Популярні книги жанру "${
			Genre[
				(genre.charAt(0).toUpperCase() +
					genre.slice(1).toLowerCase()) as keyof typeof Genre
			]
		}"` || "Популярні книги цього жанру"

	return books.length > 0 ? <BookCarousel title={title} books={books} /> : null
}
