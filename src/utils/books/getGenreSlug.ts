// src/utils/books/getGenreSlug.ts
import { genreLink } from "@/types/constants"

export const getGenreSlug = (genre: string) => {
	const genreItem = genreLink.find(item => item.label === genre)
	const genreSlug = genreItem ? genreItem.href.split("/").pop() : "other"
	return genreSlug
}
