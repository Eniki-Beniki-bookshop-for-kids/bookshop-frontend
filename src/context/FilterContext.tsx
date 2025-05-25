//src/context/FilterContext.tsx
"use client"

import { BookFilters } from "@/types/interfaces"
import { createContext, ReactNode, useContext, useState } from "react"

interface FilterContextType {
	filters: BookFilters
	updateFilters: (newFilters: BookFilters) => void
	resetFilters: () => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export const FilterProvider = ({ children }: { children: ReactNode }) => {
	const [filters, setFilters] = useState<BookFilters>({})

	const updateFilters = (newFilters: BookFilters) => {
		setFilters(prevFilters => {
			const updatedFilters = { ...prevFilters, ...newFilters }

			const cleanedFilters = Object.fromEntries(
				Object.entries(updatedFilters).filter(([key, value]) => {
					if (key === "price") {
						return (
							value &&
							typeof value === "object" &&
							("min" in value || "max" in value)
						)
					}
					return Array.isArray(value)
						? value.length > 0
						: value !== undefined && value !== null
				}),
			)

			return cleanedFilters
		})
	}

	const resetFilters = () => {
		setFilters({})
	}

	return (
		<FilterContext.Provider value={{ filters, updateFilters, resetFilters }}>
			{children}
		</FilterContext.Provider>
	)
}

export const useFilter = () => {
	const context = useContext(FilterContext)
	if (!context) {
		throw new Error("useFilter must be used within a FilterProvider")
	}
	return context
}
