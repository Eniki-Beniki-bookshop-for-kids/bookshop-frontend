// src/hooks/useBookSearch.ts
"use client"

import { getFilteredBooks } from "@/app/api/booksClient"
import { useBookStore } from "@/stores/bookStore"
import { BookFilters, SearchField } from "@/types/interfaces"
import { validateForm } from "@/utils"
import { mapSearchParamsToFilters } from "@/utils/books"
import { searchSchema } from "@/utils/validationSchemas"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"

interface UseBookSearch {
	searchField: SearchField
	itemsPerPage?: number
	initialQuery?: string
}

export const useBookSearch = ({
	searchField = "titleAuthor",
	itemsPerPage = 10,
	initialQuery = "",
}: UseBookSearch) => {
	const [query, setQuery] = useState(initialQuery)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)
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
		async (
			searchQuery: string,
			page = 1,
			itemsToLoad?: number,
			isAppend = false,
		) => {
			setLoading(true)
			clearError()

			try {
				const filters: BookFilters = mapSearchParamsToFilters(
					searchField,
					searchQuery,
				)

				const limit = itemsToLoad || itemsPerPage
				const data = await getFilteredBooks(filters, page, limit, {
					field: "title",
					order: "asc",
				})

				setBooksData(data, isAppend)
			} catch (err) {
				setError(
					err instanceof Error ? err.message : "Не вдалося завантажити книги",
				)
				setBooksData({ books: [], total: 0 })
			} finally {
				setLoading(false)
			}
		},
		[setLoading, clearError, setBooksData, searchField, itemsPerPage, setError],
	)

	const handleSearch = (newQuery: string) => {
		setQuery(newQuery)
		if (errorMessage) {
			setErrorMessage(null)
		}
	}

	const handleSearchSubmit = () => {
		const { isValid, errors } = validateForm(searchSchema, { search: query })
		if (!isValid) {
			setErrorMessage(errors.search || "Некоректний запит")
			return
		}

		setErrorMessage(null)
		setBooksData({ books: [], total: 0 })
		fetchBooks(query)
		router.push(`/catalog/book/search?query=${encodeURIComponent(query)}`)
	}

	const clearSearch = () => {
		setQuery("")
		setBooksData({ books: [], total: 0 })
		clearError()
		setErrorMessage(null)
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
		errorMessage,
	}
}
