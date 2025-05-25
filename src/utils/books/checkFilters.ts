// src/utils/books/checkFilters.ts
import { statusOptions } from "@/types/constants"
import { ServerFilterBookCriteria } from "@/types/interfaces"
import {
	OrderBook as ClientOrderBook,
	Review as ClientReview,
} from "@/types/models"
import { Prisma } from "../../../prisma/generated/client"
import { mapArray, mapBooks } from "../mapping"

type BookWhereInput = Prisma.BookWhereInput

// Побудова Prisma where із серверних критеріїв
export const buildBookWhereClause = (
	criteria: ServerFilterBookCriteria,
): BookWhereInput => {
	const where: BookWhereInput = {}

	// Обробка статусу, виходячи з фільтрів в константі statusOptions
	if (
		criteria.status &&
		Array.isArray(criteria.status) &&
		criteria.status.length > 0
	) {
		where.OR = criteria.status.map(
			status =>
				statusOptions.find(option => option.value === status)?.filter || {},
		)
	}

	// Об'єднуємо title і author через OR для запиту на Призму, якщо вони присутні і мають однакове значення
	if (criteria.title && criteria.author && criteria.title === criteria.author) {
		where.OR = [
			{ title: { contains: criteria.title, mode: "insensitive" } },
			{ author: { contains: criteria.author, mode: "insensitive" } },
		]
	} else {
		// Інакше додаємо умови окремо
		if (criteria.title) {
			where.title = { contains: criteria.title, mode: "insensitive" }
		}
		if (criteria.author) {
			where.author = { contains: criteria.author, mode: "insensitive" }
		}
	}

	if (criteria.description) {
		where.description = { contains: criteria.description, mode: "insensitive" }
	}
	if (criteria.genre) {
		where.genre = criteria.genre
	}
	if (criteria.categories) {
		where.categories = { hasSome: criteria.categories }
	}
	if (criteria.targetAges) {
		where.targetAges = { hasSome: criteria.targetAges }
	}
	if (criteria.series) {
		where.series = criteria.series
	}
	if (criteria.publisher) {
		where.publisher = criteria.publisher
	}
	if (criteria.publicationYear) {
		where.publicationYear = criteria.publicationYear
	}
	if (criteria.bookType) {
		where.bookType = { hasSome: criteria.bookType }
	}
	if (criteria.originalLanguage) {
		where.originalLanguage = criteria.originalLanguage
	}
	if (criteria.coverType) {
		where.coverType = criteria.coverType
	}
	if (criteria.priceMin || criteria.priceMax) {
		where.price = {}
		if (criteria.priceMin) {
			where.price.gte = criteria.priceMin
		}
		if (criteria.priceMax) {
			where.price.lte = criteria.priceMax
		}
	}

	return where
}

// Маппинг серверної книги у клієнтську
export const transformServerToClientBook = (
	book: Prisma.BookGetPayload<{
		include: { reviews: true; orderBooks: true }
	}>,
) => {
	return {
		...book,
		genre: mapBooks.genreServerToClient[book.genre] || book.genre,
		categories: mapArray(book.categories, mapBooks.categoriesServerToClient),
		targetAges: mapArray(book.targetAges, mapBooks.targetAgesServerToClient),
		bookType: mapArray(book.bookType, mapBooks.bookTypesServerToClient),
		language: mapBooks.languageServerToClient[book.language] || book.language,
		originalLanguage:
			mapBooks.languageServerToClient[book.originalLanguage] ||
			book.originalLanguage,
		coverType:
			mapBooks.coverTypeServerToClient[book.coverType] || book.coverType,
		paperType: book.paperType
			? mapBooks.paperTypeServerToClient[book.paperType] || book.paperType
			: undefined,
		createdAt: book.createdAt.toISOString(),
		updatedAt: book.updatedAt.toISOString(),
		reviews: book.reviews.map(
			(review): ClientReview => ({
				reviewId: review.reviewId,
				bookId: review.bookId,
				reviewName: review.reviewName,
				rating: review.rating,
				reviewText: review.reviewText,
				reviewDate: review.reviewDate.toISOString(),
				source: review.source || undefined,
				avatar: review.avatar || undefined,
				createdAt: review.createdAt.toISOString(),
				updatedAt: review.updatedAt.toISOString(),
			}),
		),
		orderBooks: book.orderBooks.map(
			(orderBook): ClientOrderBook => ({
				orderId: orderBook.orderId,
				bookId: orderBook.bookId,
				quantity: orderBook.quantity,
			}),
		),
	}
}
