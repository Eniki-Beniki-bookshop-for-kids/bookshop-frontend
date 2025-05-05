// src/components/book/BookSearchContent.tsx
"use client"

import { useBookSearch, useLoadMore, usePagination } from "@/hooks"
import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { useEffect } from "react"
import { LoadMore, Pagination } from "../pagination"
import { BookCard } from "./BookCard"

interface BookSearchContentProps {
	initialQuery: string
}

export const BookSearchContent = ({ initialQuery }: BookSearchContentProps) => {
	const itemsPerPage = 8

	const { books, total, isLoading, error, fetchBooks, query } = useBookSearch({
		searchField: "titleAuthor",
		itemsPerPage,
		initialQuery,
	})

	const { currentPage, totalPages, pageNumbers, setCurrentPage } =
		usePagination({
			totalItemsCount: total,
			itemsPerPage,
			onPageChange: page => fetchBooks(query, page),
		})

	const { itemsLoaded, remainingItems, loadMore } = useLoadMore({
		totalItemsCount: total,
		itemsPerPage,
		onLoadMore: items => fetchBooks(query, 1, items, true),
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
