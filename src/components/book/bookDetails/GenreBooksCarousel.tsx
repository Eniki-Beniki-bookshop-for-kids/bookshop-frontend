// src/components/book/bookDetails/GenreBooksCarousel.tsx
"use client"

import { BookCarousel } from "@/components/book/BookCarousel"
import { useBooks } from "@/hooks/useBooks"
import { Genre } from "@/types/models"
import { useEffect } from "react"

const genreMap = Object.keys(Genre).reduce((map, key) => {
	map[key.toLowerCase()] = Genre[key as keyof typeof Genre]
	return map
}, {} as Record<string, string>)

export const GenreBooksCarousel = ({ genre }: { genre: string }) => {
	const { books, fetchBooksByGenre } = useBooks()

	useEffect(() => {
		fetchBooksByGenre(genre)
	}, [genre, fetchBooksByGenre])

	const title =
		`Популярні книги жанру "${genreMap[genre.toLowerCase()]}"` ||
		"Популярні книги цього жанру"

	return books.length > 0 ? <BookCarousel title={title} books={books} /> : null
}
