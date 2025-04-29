// src/components/book/BookSearchContent.tsx
"use client"

import { useEffect } from "react"
import { useBookSearch } from "@/hooks"
import { usePagination } from "@/hooks"
import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { useSearchParams } from "next/navigation"
import { BookCard } from "./BookCard"
import { Pagination, LoadMore } from "../pagination"

export const BookSearchContent = () => {
	const searchParamsClient = useSearchParams()
	const query = searchParamsClient.get("query") || ""

	const { books, total, isLoading, error, fetchBooks } = useBookSearch(
		"titleAuthor",
		query,
	)

	const itemsPerPage = 8 // Кількість книг на сторінці після пошуку

	const {
		currentPage,
		totalPages,
		pageNumbers,
		currentItems,
		remainingItems,
		setCurrentPage,
		loadMore,
	} = usePagination({
		totalItems: books,
		itemsPerPage,
	})

	useEffect(() => {
		fetchBooks(query, currentPage)
	}, [query, currentPage, fetchBooks])

	return (
		<Box mt={8}>
			<VStack spacing={4} align="start" w="full">
				{query && (
					<Text fontSize="lg" color="customGray">
						{`Пошук за запитом: "${query}"`}
					</Text>
				)}
				{isLoading && (
					<Text fontSize="xl" color="customGray">
						Завантаження...
					</Text>
				)}
				{error && (
					<Text fontSize="xl" color="red.500">
						Помилка: {error}
					</Text>
				)}
				{!isLoading && !error && books.length === 0 && query.length >= 3 && (
					<Text fontSize="xl" color="customGray">
						Нічого не знайдено
					</Text>
				)}
				{!isLoading && !error && books.length > 0 && (
					<>
						<Text fontSize="xl" fontWeight="bold" color="customDarkGray">
							Результати пошуку ({total})
						</Text>
						<SimpleGrid
							columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
							spacing={4}
							w="full"
						>
							{currentItems.map(book => (
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
					isDisabled={remainingItems <= 0}
					itemsName="книг"
				/>
			)}
			{totalPages > 1 && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					pageNumbers={pageNumbers}
					onPageChange={setCurrentPage}
				/>
			)}
		</Box>
	)
}
