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

	const { currentPage, totalPages, pageNumbers, currentItems, setCurrentPage } =
		usePagination({
			totalItems: genreLink,
			itemsPerPage: initialItemsPerPage,
		})

	return (
		<Box mt={8}>
			<GenreGrid
				genres={currentItems}
				catalogImages={catalogImages}
				startIndex={0}
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
