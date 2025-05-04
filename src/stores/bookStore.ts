// src/stores/bookStore.ts
import { Book } from "@/types/models"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface BooksResponse {
	books: Book[]
	total: number
}

interface BookState {
	books: Book[]
	bestsellerBooks: Book[]
	discountBooks: Book[]
	newBooks: Book[]
	total: number
	filters: Record<string, string>
	page: number
	limit: number
	isLoading: boolean
	error: string | null
	setBooksData: (data: BooksResponse, append?: boolean) => void
	setFilters: (filters: Record<string, string>) => void
	setPage: (page: number) => void
	setLoading: (isLoading: boolean) => void
	setError: (error: string | null) => void
	clearError: () => void
	setBestsellerBooks: (books: Book[]) => void
	setDiscountBooks: (books: Book[]) => void
	setNewBooks: (books: Book[]) => void
}

export const useBookStore = create<BookState>()(
	persist(
		set => ({
			books: [],
			bestsellerBooks: [],
			discountBooks: [],
			newBooks: [],
			total: 0,
			filters: {},
			page: 1,
			limit: 10,
			isLoading: true,
			error: null,

			setBooksData: (data, isAppend = false) =>
				set(state => ({
					...state,
					books: isAppend ? [...state.books, ...data.books] : data.books,
					total: data.total,
				})),

			setFilters: filters => set(state => ({ ...state, filters, page: 1 })),

			setPage: page => set(state => ({ ...state, page })),

			setLoading: isLoading => set(state => ({ ...state, isLoading })),

			setError: error => set(state => ({ ...state, error })),

			clearError: () => set(state => ({ ...state, error: null })),

			setBestsellerBooks: books =>
				set(state => ({ ...state, bestsellerBooks: books })),

			setDiscountBooks: books =>
				set(state => ({ ...state, discountBooks: books })),

			setNewBooks: books => set(state => ({ ...state, newBooks: books })),
		}),
		{
			name: "book-storage",
			storage: createJSONStorage(() => localStorage),
			onRehydrateStorage: () => state => {
				if (state) {
					state.isLoading = false
				}
			},
		},
	),
)
