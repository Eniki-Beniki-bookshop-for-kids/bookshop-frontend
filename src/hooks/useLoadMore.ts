// src/hooks/useLoadMore.ts

"use client"

import { useEffect, useState } from "react"

interface UseLoadMoreProps {
	fetchBooks: (
		query: string,
		page: number,
		itemsPerPage: number,
		isAppend: boolean,
	) => void
	query: string
	total: number
	itemsPerPage: number
}

interface UseLoadMoreReturn {
	itemsLoaded: number
	remainingItems: number
	loadMore: () => void
	reset: () => void
}

export const useLoadMore = ({
	fetchBooks,
	query,
	total,
	itemsPerPage,
}: UseLoadMoreProps): UseLoadMoreReturn => {
	const [itemsLoaded, setItemsLoaded] = useState(itemsPerPage)

	useEffect(() => {
		// скидаємо лічильник при новому запиті
		setItemsLoaded(itemsPerPage)
	}, [query, itemsPerPage])

	const remainingItems = Math.max(0, total - itemsLoaded)

	const loadMore = () => {
		const nextPage = Math.ceil(itemsLoaded / itemsPerPage) + 1
		fetchBooks(query, nextPage, itemsPerPage, true)
		setItemsLoaded(prev => prev + itemsPerPage)
	}

	const reset = () => setItemsLoaded(itemsPerPage)

	return {
		itemsLoaded,
		remainingItems,
		loadMore,
		reset,
	}
}
