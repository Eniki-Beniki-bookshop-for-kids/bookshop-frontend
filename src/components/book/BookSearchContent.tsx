// src/components/book/BookSearchContent.tsx
// "use client"

// import { useBookSearch, useLoadMore, usePagination } from "@/hooks"
// import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react"
// import { useEffect } from "react"
// import { Loader } from "../Loader"
// import { LoadMore, Pagination } from "../pagination"
// import { BookCard } from "./BookCard"

// interface BookSearchContentProps {
// 	initialQuery: string
// }

// export const BookSearchContent = ({ initialQuery }: BookSearchContentProps) => {
// 	const itemsPerPage = 8

// 	const { books, total, isLoading, error, fetchBooks, query, clearSearch } =
// 		useBookSearch({
// 			searchField: "titleAuthor",
// 			itemsPerPage,
// 			initialQuery,
// 		})

// 	const { currentPage, totalPages, pageNumbers, setCurrentPage } =
// 		usePagination({
// 			totalItemsCount: total,
// 			itemsPerPage,
// 			onPageChange: page => fetchBooks(query, page),
// 		})

// 	const { itemsLoaded, remainingItems, loadMore } = useLoadMore({
// 		totalItemsCount: total,
// 		itemsPerPage,
// 		onLoadMore: items => fetchBooks(query, 1, items, true),
// 	})

// 	useEffect(() => {
// 		fetchBooks(query, currentPage)
// 	}, [query, currentPage, fetchBooks])

// 	if (error) {
// 		clearSearch()
// 		console.error("Error loading searching books:", error)
// 		throw new Error("Failed to load searching books")
// 	}

// 	return (
// 		<Box mt={8}>
// 			<VStack spacing={4} align="center" w="full">
// 				{query && (
// 					<Text fontSize="lg" color="customGray" alignSelf="start">
// 						{`Пошук за запитом: "${query}"`}
// 					</Text>
// 				)}
// 				{isLoading && (
// 					<Loader isLoading={isLoading} variant="metronome" size="60" />
// 				)}
// 				{!isLoading && !error && books.length === 0 && query.length >= 3 && (
// 					<Text fontSize="24px" color="red" alignSelf="start">
// 						За Вашим запитом не знайдено жодної книги
// 					</Text>
// 				)}
// 				{!isLoading && !error && books.length > 0 && (
// 					<>
// 						<Text fontSize="xl" fontWeight="bold" color="customDarkGray">
// 							Результати пошуку ({total})
// 						</Text>
// 						<SimpleGrid
// 							columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
// 							spacing={4}
// 							w="full"
// 						>
// 							{books.slice(0, itemsLoaded).map(book => (
// 								<BookCard key={book.bookId} book={book} />
// 							))}
// 						</SimpleGrid>
// 					</>
// 				)}
// 			</VStack>
// 			{books.length > 0 && remainingItems > 0 && (
// 				<LoadMore
// 					itemsPerPage={itemsPerPage}
// 					onLoadMore={loadMore}
// 					isDisabled={remainingItems <= 0}
// 					itemsName="книг"
// 				/>
// 			)}
// 			{totalPages > 1 && (
// 				<Pagination
// 					currentPage={currentPage}
// 					totalPages={totalPages}
// 					pageNumbers={pageNumbers}
// 					onPageChange={setCurrentPage}
// 				/>
// 			)}
// 		</Box>
// 	)
// }

"use client"

import { useBookSearch, useLoadMore } from "@/hooks"
import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { Fragment, useEffect, useState } from "react"
import { Loader } from "../Loader"
import { LoadMore } from "../pagination"
import { BookCard } from "./BookCard"

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

  const { itemsLoaded, remainingItems, loadMore } = useLoadMore({
    fetchBooks,
    query,
    total,
    itemsPerPage,
  })

  // Зберігаємо порції книг у стані
  const [bookChunks, setBookChunks] = useState<any[][]>([])

  useEffect(() => {
    // Очищаємо порції при зміні запиту
    setBookChunks([])
    fetchBooks(query, 1, itemsPerPage, false)
  }, [query, fetchBooks])

  useEffect(() => {
    if (books.length > 0) {
      // Додаємо лише нові книги як нову порцію
      const newChunk = books.slice(bookChunks.length * itemsPerPage, itemsLoaded)
      if (newChunk.length > 0) {
        setBookChunks(prevChunks => [...prevChunks, newChunk])
      }
    }
  }, [books, itemsLoaded, bookChunks.length, itemsPerPage])

  if (error) {
    clearSearch()
    console.error("Error loading searching books:", error)
    throw new Error("Failed to load searching books")
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
        {!isLoading && !error && books.length === 0 && query.length >= 3 && (
          <Text fontSize="24px" color="red" alignSelf="start">
            За Вашим запитом не знайдено жодної книги
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
              {bookChunks.map((chunk, index) => (
                <Fragment key={index}>
                  {chunk.map(book => (
                    <BookCard key={book.bookId} book={book} />
                  ))}
                </Fragment>
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
