//src/hooks/usePagination.ts
"use client"

import { useState } from "react"

interface UsePaginationProps {
	totalItemsCount: number
	itemsPerPage?: number
	onPageChange?: (page: number) => void
}

interface UsePaginationReturn {
	currentPage: number
	totalPages: number
	pageNumbers: (number | string)[]
	setCurrentPage: (page: number) => void
	reset: () => void
}

export const usePagination = ({
	totalItemsCount,
	itemsPerPage = 4,
	onPageChange,
}: UsePaginationProps): UsePaginationReturn => {
	const [currentPage, setCurrentPageState] = useState(1)

	const totalPages = Math.ceil(totalItemsCount / itemsPerPage)

	const getPageNumbers = () => {
		const maxPagesToShow = 5
		const pages: (number | string)[] = []
		const halfRange = Math.floor(maxPagesToShow / 2)

		let startPage = Math.max(1, currentPage - halfRange)
		const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1)

		if (endPage - startPage + 1 < maxPagesToShow) {
			startPage = Math.max(1, endPage - maxPagesToShow + 1)
		}

		pages.push(1)

		if (startPage > 2) {
			pages.push("...")
		}

		for (let i = startPage; i <= endPage; i++) {
			if (i === 1 && pages.includes(1)) continue
			if (i === totalPages && pages.includes(totalPages)) continue
			pages.push(i)
		}

		if (endPage < totalPages - 1) {
			pages.push("...")
		}

		if (endPage < totalPages) {
			pages.push(totalPages)
		}

		return pages
	}

	const pageNumbers = getPageNumbers()

	const reset = () => {
		setCurrentPageState(1)
	}

	const setCurrentPage = (page: number) => {
		setCurrentPageState(page)
		if (onPageChange) {
			onPageChange(page)
		}
	}

	return {
		currentPage,
		totalPages,
		pageNumbers,
		setCurrentPage,
		reset,
	}
}
