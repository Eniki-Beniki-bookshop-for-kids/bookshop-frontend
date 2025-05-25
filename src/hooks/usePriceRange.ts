// src/hooks/usePriceRange.ts
"use client"

import { getPriceRange } from "@/app/api/booksClient"
import { useEffect, useState } from "react"

export const usePriceRange = () => {
	const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchPriceRange = async () => {
			try {
				setLoading(true)
				const range = await getPriceRange()
				setPriceRange(range)
			} catch (error) {
				setError(
					error instanceof Error
						? error.message
						: typeof error === "string"
						? error
						: "Failed to fetch price range",
				)
			} finally {
				setLoading(false)
			}
		}

		fetchPriceRange()
	}, [])

	return { priceRange, loading, error }
}
