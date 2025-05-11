// src/hooks/useBooks.ts
"use client"

import { getBookById, getFilteredBooks } from "@/app/api/booksClient"
import { useBookStore } from "@/stores/bookStore"
import { Book } from "@/types/models"
import { useCallback } from "react"

type SortParams = { field: string; order: "asc" | "desc" }

export const useBooks = (sort?: SortParams) => {
	const {
		books,
		total,
		filters,
		page,
		limit,
		isLoading,
		error,
		bestsellerBooks,
		discountBooks,
		newBooks,
		setBooksData,
		setFilters,
		setPage,
		setLoading,
		setError,
		clearError,
		setBestsellerBooks,
		setDiscountBooks,
		setNewBooks,
	} = useBookStore()

	// Фетчинг книг за кастомним фільтром
	const fetchBooks = useCallback(
		async (customFilters?: Record<string, string>) => {
			setLoading(true)
			clearError()

			const filtersToUse = customFilters || filters

			try {
				const data = await getFilteredBooks(filtersToUse, page, limit, sort)
				setBooksData(data)
			} catch (error) {
				setError(
					error instanceof Error
						? error.message
						: typeof error === "string"
						? error
						: "Failed to load books",
				)
			} finally {
				setLoading(false)
			}
		},
		[
			filters,
			page,
			limit,
			sort,
			setBooksData,
			setLoading,
			setError,
			clearError,
		],
	)

	// Метод для фетчингу книг за типом (для головної сторінки)
	const fetchBooksByType = useCallback(
		async (type: "bestsellerBooks" | "discountBooks" | "newBooks") => {
			setLoading(true)
			clearError()

			const filterMap: Record<
				"bestsellerBooks" | "discountBooks" | "newBooks",
				Record<string, string>
			> = {
				bestsellerBooks: { status: "bestseller" },
				discountBooks: { status: "discount" },
				newBooks: { status: "new" },
			}

			const sortMap: Record<
				"bestsellerBooks" | "discountBooks" | "newBooks",
				SortParams
			> = {
				bestsellerBooks: { field: "publicationYear", order: "desc" }, // Сортування за роком публікації (спадання)
				newBooks: { field: "createdAt", order: "desc" }, // Сортування за датою створення (спадання)
				discountBooks: { field: "discount", order: "desc" }, // Сортування за розміром знижки (спадання)
			}

			const setMap: Record<
				"bestsellerBooks" | "discountBooks" | "newBooks",
				(books: Book[]) => void
			> = {
				bestsellerBooks: setBestsellerBooks,
				discountBooks: setDiscountBooks,
				newBooks: setNewBooks,
			}

			try {
				const data = await getFilteredBooks(
					filterMap[type],
					1,
					10,
					sortMap[type],
				)
				setMap[type](data.books)
			} catch (error) {
				setError(
					error instanceof Error
						? error.message
						: typeof error === "string"
						? error
						: `Failed to load ${type}`,
				)
			} finally {
				setLoading(false)
			}
		},
		[
			setBestsellerBooks,
			setDiscountBooks,
			setNewBooks,
			setLoading,
			setError,
			clearError,
		],
	)

	// Новий метод для фетчингу однієї книги за bookId
	const fetchBookById = useCallback(
		async (bookId: string): Promise<Book> => {
			setLoading(true)
			clearError()

			try {
				const book = await getBookById(bookId)
				return book
			} catch (error) {
				setError(
					error instanceof Error
						? error.message
						: typeof error === "string"
						? error
						: `Failed to load book with ID ${bookId}`,
				)
				throw error
			} finally {
				setLoading(false)
			}
		},
		[setLoading, clearError, setError],
	)

	const updateFilters = (newFilters: Record<string, string>) => {
		setFilters(newFilters)
		fetchBooks(newFilters)
	}

	const changePage = (newPage: number) => {
		setPage(newPage)
		fetchBooks()
	}

	const refetchBooks = () => {
		fetchBooks()
	}

	return {
		books,
		total,
		isLoading,
		error,
		filters,
		page,
		limit,
		bestsellerBooks,
		discountBooks,
		newBooks,
		updateFilters,
		changePage,
		refetchBooks,
		fetchBooksByType,
		fetchBookById,
		clearError,
	}
}
