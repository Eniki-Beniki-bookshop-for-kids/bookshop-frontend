// src/utils/books/checkFilters.ts
import { ServerFilterBookCriteria } from "@/types/interfaces"
import { Prisma } from "../../../prisma/generated/client"
import { mapArray, mapBooks } from "../mapping"

type BookWhereInput = Prisma.BookWhereInput

// Побудова Prisma where із серверних критеріїв
export const buildBookWhereClause = (
	criteria: ServerFilterBookCriteria,
): BookWhereInput => {
	const where: BookWhereInput = {}

	switch (criteria.status) {
		case "discount":
			where.discount = { gt: 0 }
			break
		case "new":
			where.createdAt = {
				gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // нова книга - менше 30 днів як на складі
			}
			break
		case "popular":
			where.totalSales = { gte: 1000 } // популярна книга - більше 1000 продажів
			break
		case "soon":
			where.isPublish = false
			break
		case "bestseller":
			where.isBestseller = true
			break
	}

	if (criteria.title) {
		where.title = { contains: criteria.title, mode: "insensitive" }
	}
	if (criteria.author) {
		where.author = { contains: criteria.author, mode: "insensitive" }
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

// Мапінг серверної книги у клієнтську
export const transformServerToClientBook = (
	book: Prisma.BookGetPayload<object>,
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
	}
}
