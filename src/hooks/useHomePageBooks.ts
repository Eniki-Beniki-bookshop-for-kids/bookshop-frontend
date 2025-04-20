// src/hooks/useHomePageBooks.ts
"use client"

import { useEffect } from "react"
import { useBooks } from "./useBooks"

export const useHomePageBooks = () => {
	const {
		bestsellerBooks,
		discountBooks,
		newBooks,
		fetchBooksByType,
		isLoading,
		error,
		clearError,
	} = useBooks()

	// Отримаємо всі три каруселі книг
	useEffect(() => {
		const fetchAll = async () => {
			await Promise.all([
				fetchBooksByType("bestsellerBooks"),
				fetchBooksByType("discountBooks"),
				fetchBooksByType("newBooks"),
			])
		}

		fetchAll()
	}, [fetchBooksByType])

	return {
		bestsellerBooks,
		discountBooks,
		newBooks,
		isLoading,
		error,
		clearError,
	}
}
