// src/utils/books/getSearchKey.ts
import { SearchField } from "@/types/interfaces"

export const getSearchKey = (field: SearchField): string => {
	switch (field) {
		case "titleAuthor":
			return "searchTitleAuthor"
		case "description":
			return "searchDescription"
		case "publisher":
			return "searchPublisher"
		case "series":
			return "searchSeries"
		case "author":
			return "searchAuthor"
		default:
			return "searchTitleAuthor"
	}
}
