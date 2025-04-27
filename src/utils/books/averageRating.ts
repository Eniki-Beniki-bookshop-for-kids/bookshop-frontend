//src/utils/books/averageRating.ts
import { Book } from "@/types/models"

export const averageRating = (book: Book): number | null =>
	book.reviews.length
		? book.reviews.reduce((sum, review) => sum + review.rating, 0) /
		  book.reviews.length
		: 0
