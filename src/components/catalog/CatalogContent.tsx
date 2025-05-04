// src/components/catalog/CatalogContent.tsx
"use client"

import { usePagination } from "@/hooks"
import { genreLink } from "@/types/constants"
import { Box } from "@chakra-ui/react"
import { Pagination } from "../pagination"
import { GenreGrid } from "./GenreGrid"

export const CatalogContent = () => {
	const catalogImages = [
		"/images/book_with_heart.png",
		"/images/book_smile.png",
		"/images/book_teacher.png",
	]

	const initialItemsPerPage = 8 // Кількість елементів на сторінці

	const { currentPage, totalPages, pageNumbers, setCurrentPage } =
		usePagination({
			totalItemsCount: genreLink.length,
			itemsPerPage: initialItemsPerPage,
		})

	const startIndex = (currentPage - 1) * initialItemsPerPage
	const endIndex = startIndex + initialItemsPerPage
	const currentItems = genreLink.slice(startIndex, endIndex)

	return (
		<Box mt={8}>
			<GenreGrid
				genres={currentItems}
				catalogImages={catalogImages}
				startIndex={startIndex}
			/>
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
