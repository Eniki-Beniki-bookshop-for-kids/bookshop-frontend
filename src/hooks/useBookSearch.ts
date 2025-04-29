// src/hooks/useBookSearch.ts
"use client"

import { getFilteredBooks } from "@/app/api/booksClient"
import { useBookStore } from "@/stores/bookStore"
import { SearchField } from "@/types/interfaces"
import { getSearchKey } from "@/utils/books"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"

export const useBookSearch = (
	searchField: SearchField = "titleAuthor",
	initialQuery: string = "",
) => {
	const [query, setQuery] = useState(initialQuery)
	const {
		books,
		total,
		isLoading,
		error,
		setBooksData,
		setLoading,
		setError,
		clearError,
	} = useBookStore()
	const router = useRouter()

	const fetchBooks = useCallback(
		async (searchQuery: string, page = 1) => {
			if (searchQuery.length < 3) {
				setBooksData({ books: [], total: 0 })
				clearError()
				return
			}

			setLoading(true)
			clearError()

			try {
				const searchKey = getSearchKey(searchField)
				const filters: Record<string, string> = {
					[searchKey]: searchQuery,
				}
				const data = await getFilteredBooks(filters, page, 10, {
					field: "title",
					order: "asc",
				})
				setBooksData(data)
			} catch (err) {
				setError(
					err instanceof Error ? err.message : "Не вдалося завантажити книги",
				)
				setBooksData({ books: [], total: 0 })
			} finally {
				setLoading(false)
			}
		},
		[searchField, setBooksData, setLoading, setError, clearError],
	)

	const handleSearch = (newQuery: string) => setQuery(newQuery)

	const handleSearchSubmit = () => {
		if (query.length < 3) return // Не робимо запит, якщо менше 3 символів
		fetchBooks(query)
		router.push(`catalog/book/search?query=${encodeURIComponent(query)}`)
	}

	const clearSearch = () => {
		setQuery("")
		setBooksData({ books: [], total: 0 })
		clearError()
	}

	return {
		query,
		books,
		total,
		isLoading,
		error,
		fetchBooks,
		handleSearch,
		handleSearchSubmit,
		clearSearch,
	}
}
