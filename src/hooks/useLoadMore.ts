//src/hooks/useLoadMore.ts
"use client"

import { useState } from "react"

interface UseLoadMoreProps {
	totalItemsCount: number
	itemsPerPage?: number
	onLoadMore?: (itemsLoaded: number) => void
}

interface UseLoadMoreReturn {
	itemsLoaded: number
	remainingItems: number
	loadMore: () => void
	reset: () => void
}

export const useLoadMore = ({
	totalItemsCount,
	itemsPerPage = 4,
	onLoadMore,
}: UseLoadMoreProps): UseLoadMoreReturn => {
	const [itemsLoaded, setItemsLoaded] = useState(itemsPerPage)

	const remainingItems = Math.max(0, totalItemsCount - itemsLoaded)

	const loadMore = () => {
		const newItemsLoaded = Math.min(itemsLoaded + itemsPerPage, totalItemsCount)
		setItemsLoaded(newItemsLoaded)
		if (onLoadMore) {
			onLoadMore(newItemsLoaded)
		}
	}

	const reset = () => {
		setItemsLoaded(itemsPerPage)
	}

	return {
		itemsLoaded,
		remainingItems,
		loadMore,
		reset,
	}
}
