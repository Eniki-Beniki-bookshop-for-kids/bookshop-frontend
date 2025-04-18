// src/app/api/booksClient.ts
import apiClient from "@/lib/apiClient"
import { ApiErrorResponse } from "@/types/interfaces"
import {
	Book,
	BookTypes,
	Categories,
	CoverType,
	Genre,
	Language,
	TargetAges,
} from "@/types/models"
import { AxiosError } from "axios"

const BOOKS_ENDPOINT = "/api/books"

interface BookFilters {
	status?: "discount" | "new" | "popular" | "soon" | "bestseller"
	title?: string
	author?: string
	genre?: Genre
	categories?: Categories[]
	targetAges?: TargetAges[]
	series?: string
	publisher?: string
	publicationYear?: number
	bookType?: BookTypes[]
	originalLanguage?: Language
	coverType?: CoverType
	price?: { min?: number; max?: number }
}

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

// Запити до книг
export const getAllBooks = async (): Promise<Book[]> => {
	return fetchData<Book[]>(`${BOOKS_ENDPOINT}/all`, undefined, "all books")
}

export const getPopularBooks = async (): Promise<Book[]> => {
	return fetchData<Book[]>(
		`${BOOKS_ENDPOINT}/popular`,
		undefined,
		"popular books",
	)
}

export const getDiscountedBooks = async (): Promise<Book[]> => {
	return fetchData<Book[]>(
		`${BOOKS_ENDPOINT}/discount`,
		undefined,
		"discounted books",
	)
}

export const getNewBooks = async (): Promise<Book[]> => {
	return fetchData<Book[]>(`${BOOKS_ENDPOINT}/new`, undefined, "new books")
}

export const getFilteredBooks = async (
	filters: BookFilters,
	page: number,
	limit: number,
	sort?: { field: string; order: "asc" | "desc" },
): Promise<{ books: Book[]; total: number }> => {
	return fetchData<{ books: Book[]; total: number }>(
		`${BOOKS_ENDPOINT}/catalog`,
		{ ...filters, page, limit, sort },
		"filtered books",
	)
}
