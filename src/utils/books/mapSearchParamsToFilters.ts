// src/utils/books/mapSearchParamsToFilters.ts
import { BookFilters, SearchField } from "@/types/interfaces"

export const mapSearchParamsToFilters = (
	field: SearchField,
	searchQuery: string,
): BookFilters => {
	switch (field) {
		case "titleAuthor":
			return { title: searchQuery, author: searchQuery }
		case "description":
			return { description: searchQuery }
		case "publisher":
			return { publisher: searchQuery }
		case "series":
			return { series: searchQuery }
		case "author":
			return { author: searchQuery }
		default:
			return { title: searchQuery, author: searchQuery }
	}
}
