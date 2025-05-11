// src/components/book/BookSearchContent.tsx
"use client"

import { useBookSearch, useLoadMore } from "@/hooks"
import { Box, Text, VStack } from "@chakra-ui/react"
import { useEffect } from "react"
import { Loader } from "../../Loader"
import { LoadMore } from "../../pagination"
import { BookSearchResult } from "./BookSearchResult"

interface BookSearchContentProps {
	initialQuery: string
}

export const BookSearchContent = ({ initialQuery }: BookSearchContentProps) => {
	const itemsPerPage = 8

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
				{isLoading && books.length === 0 && (
					<Loader isLoading={isLoading} variant="metronome" size="60" />
				)}
				{!isLoading && books.length === 0 && query.length >= 3 && (
					<Text fontSize="24px" color="red" alignSelf="start">
						За Вашим запитом не знайдено жодної книги
					</Text>
				)}
				<BookSearchResult
					books={books}
					total={total}
					itemsLoaded={itemsLoaded}
				/>
			</VStack>

			{books.length > 0 && remainingItems > 0 && (
				<LoadMore
					itemsPerPage={itemsPerPage}
					remainingItems={remainingItems}
					onLoadMore={loadMore}
					isDisabled={remainingItems <= 0 || isLoading}
					itemsName="книг"
				/>
			)}
		</Box>
	)
}
