// src/components/book/BookSearchContent.tsx

"use client"

import { useBookSearch, useLoadMore } from "@/hooks"
import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { useEffect } from "react"
import { Loader } from "../Loader"
import { LoadMore } from "../pagination"
import { BookCard } from "./BookCard"

interface BookSearchContentProps {
	initialQuery: string
}

export const BookSearchContent = ({ initialQuery }: BookSearchContentProps) => {
	const itemsPerPage = 8

	// Використовуємо хуки для пошуку та "завантажити ще"
	const { books, total, isLoading, error, fetchBooks, query, clearSearch } =
		useBookSearch({
			searchField: "titleAuthor",
			itemsPerPage,
			initialQuery,
		})
	const { itemsLoaded, remainingItems, loadMore, reset } = useLoadMore({
		fetchBooks,
		query,
		total,
		itemsPerPage,
	})

	useEffect(() => {
		reset() // скидаємо кількість завантажених
		fetchBooks(query, 1, itemsPerPage, false)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query])

	if (error) {
		clearSearch()
		console.error("Не вдалося завантажити книги:", error)
		throw new Error("Не вдалося завантажити книги")
	}

	return (
		<Box mt={8}>
			<VStack spacing={4} align="center" w="full">
				{query && (
					<Text fontSize="lg" color="customGray" alignSelf="start">
						{`Пошук за запитом: "${query}"`}
					</Text>
				)}

				{isLoading && books.length === 0 && (
					<Loader isLoading={isLoading} variant="metronome" size="60" />
				)}

				{!isLoading && books.length === 0 && query.length >= 3 && (
					<Text fontSize="24px" color="red" alignSelf="start">
						За Вашим запитом не знайдено жодної книги
					</Text>
				)}

				{books.length > 0 && (
					<>
						<Text fontSize="xl" fontWeight="bold" color="customDarkGray">
							Результати пошуку ({total})
						</Text>

						<SimpleGrid
							columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
							spacing={4}
							w="full"
						>
							{books.slice(0, itemsLoaded).map(book => (
								<BookCard key={book.bookId} book={book} />
							))}
						</SimpleGrid>
					</>
				)}
			</VStack>

			{books.length > 0 && remainingItems > 0 && (
				<LoadMore
					itemsPerPage={itemsPerPage}
					onLoadMore={loadMore}
					isDisabled={remainingItems <= 0 || isLoading}
					itemsName="книг"
				/>
			)}
		</Box>
	)
}
