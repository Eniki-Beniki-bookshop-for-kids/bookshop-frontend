// src/app/api/booksClient.ts
import apiClient from "@/lib/apiClient"
import { ApiErrorResponse, BookFilters } from "@/types/interfaces"
import { Book } from "@/types/models"
import { AxiosError } from "axios"

const BOOKS_ENDPOINT = "/api/books"

// Узагальнена функція для виконання запитів
const fetchData = async <T>(
	endpoint: string,
	params?: Record<string, unknown>,
	errorMessage: string = "data",
): Promise<T> => {
	try {
		const response = await apiClient.get<T>(endpoint, { params })
		return response.data
	} catch (error) {
		const axiosError = error as AxiosError<ApiErrorResponse>
		throw new Error(
			axiosError.response?.data?.message || `Failed to fetch ${errorMessage}`,
		)
	}
}

export const getFilteredBooks = async (
	filters: BookFilters,
	page: number,
	limit: number,
	sort?: { field: string; order: "asc" | "desc" },
): Promise<{ books: Book[]; total: number }> => {
	return fetchData<{ books: Book[]; total: number }>(
		`${BOOKS_ENDPOINT}/filters`,
		{ ...filters, page, limit, sort },
		"filtered books",
	)
}

// отримання книги за bookId
export const getBookById = async (bookId: string): Promise<Book> => {
	return fetchData<Book>(
		`${BOOKS_ENDPOINT}/id/${bookId}`,
		undefined,
		`book with ID ${bookId}`,
	)
}
