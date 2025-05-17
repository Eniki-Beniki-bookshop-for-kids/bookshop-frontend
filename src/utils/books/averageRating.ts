//src/utils/books/averageRating.ts
import { Review } from "@/types/models"

export const averageRating = (reviews: Review[]): number | null =>
	reviews.length
		? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
		: 0
