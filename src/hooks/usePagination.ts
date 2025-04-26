//src/hooks/usePagination.ts
"use client"

import { useState } from "react"

interface UsePaginationProps<T> {
	totalItems: T[]
	itemsPerPage?: number
}

interface UsePaginationReturn<T> {
	currentPage: number
	itemsPerPage: number
	totalPages: number
	pageNumbers: (number | string)[]
	visibleItemsCount: number
	currentItems: T[]
	remainingItems: number
	setCurrentPage: (page: number) => void
	loadMore: () => void
	reset: () => void
}

export const usePagination = <T>({
	totalItems,
	itemsPerPage = 4,
}: UsePaginationProps<T>): UsePaginationReturn<T> => {
	const [currentPage, setCurrentPageState] = useState(1)
	const [visibleItemsCount, setVisibleItemsCount] = useState(itemsPerPage)

	const totalPages = Math.ceil(totalItems.length / itemsPerPage)

	// Логіка для відображення номерів сторінок
	const getPageNumbers = () => {
		const maxPagesToShow = 5
		const pages: (number | string)[] = []
		const halfRange = Math.floor(maxPagesToShow / 2)

		let startPage = Math.max(1, currentPage - halfRange)
		const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1)

		// Корекція startPage, якщо ми досягли кінця
		if (endPage - startPage + 1 < maxPagesToShow) {
			startPage = Math.max(1, endPage - maxPagesToShow + 1)
		}

		// Додаємо першу сторінку
		pages.push(1)

		// Додаємо "..." якщо є пропуск між 1 і startPage
		if (startPage > 2) {
			pages.push("...")
		}

		// Додаємо сторінки в діапазоні startPage до endPage, уникаючи дублювання
		for (let i = startPage; i <= endPage; i++) {
			if (i === 1 && pages.includes(1)) continue // Пропускаємо сторінку 1, якщо вона вже додана
			if (i === totalPages && pages.includes(totalPages)) continue // Пропускаємо останню сторінку, якщо вона вже додана
			pages.push(i)
		}

		// Додаємо "..." якщо є пропуск між endPage і останньою сторінкою
		if (endPage < totalPages - 1) {
			pages.push("...")
		}

		// Додаємо останню сторінку
		if (endPage < totalPages) {
			pages.push(totalPages)
		}

		return pages
	}

	const pageNumbers = getPageNumbers()

	// Функція для "Завантажити більше"
	const loadMore = () => {
		const nextItemsCount = visibleItemsCount + itemsPerPage
		setVisibleItemsCount(Math.min(nextItemsCount, totalItems.length))
	}

	// Функція для скидання
	const reset = () => {
		setCurrentPageState(1)
		setVisibleItemsCount(itemsPerPage)
	}

	// Обчислюємо видимі елементи
	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage
	const currentItemsForPage = totalItems.slice(startIndex, endIndex)
	const currentItemsForLoadMore = totalItems.slice(0, visibleItemsCount)

	const currentItems =
		visibleItemsCount > currentPage * itemsPerPage
			? currentItemsForLoadMore
			: currentItemsForPage

	// Обчислюємо кількість елементів, які ще можна завантажити
	const remainingItems = totalItems.length - visibleItemsCount

	// Функція для зміни сторінки
	const setCurrentPage = (page: number) => {
		setCurrentPageState(page)
		setVisibleItemsCount(page * itemsPerPage)
	}

	return {
		currentPage,
		itemsPerPage,
		totalPages,
		pageNumbers,
		visibleItemsCount,
		currentItems,
		remainingItems,
		setCurrentPage,
		loadMore,
		reset,
	}
}
