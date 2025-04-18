//src/utils/books/extractFilterParams.ts
import {
	FilterBookParams,
	PrismaBookTypes,
	PrismaCategories,
	PrismaCoverType,
	PrismaGenre,
	PrismaLanguage,
	PrismaTargetAges,
	ServerFilterBookCriteria,
} from "@/types/interfaces"
import { mapArray, mapBooks } from "../mapping"

// Витягуємо параметри з searchParams
export const filterBookParams = (
	searchParams: URLSearchParams,
): FilterBookParams => {
	return {
		status: searchParams.get("status") || undefined,
		title: searchParams.get("title") || undefined,
		author: searchParams.get("author") || undefined,
		genre: searchParams.get("genre") || undefined,
		categories: searchParams.get("categories")?.split(",") || undefined,
		targetAges: searchParams.get("targetAges")?.split(",") || undefined,
		series: searchParams.get("series") || undefined,
		publisher: searchParams.get("publisher") || undefined,
		publicationYear: searchParams.get("publicationYear") || undefined,
		bookType: searchParams.get("bookType")?.split(",") || undefined,
		originalLanguage: searchParams.get("originalLanguage") || undefined,
		coverType: searchParams.get("coverType") || undefined,
		priceMin: searchParams.get("price.min") || undefined,
		priceMax: searchParams.get("price.max") || undefined,
		page: parseInt(searchParams.get("page") || "1"),
		limit: parseInt(searchParams.get("limit") || "10"),
		sortField: searchParams.get("sort.field") || undefined,
		sortOrder: searchParams.get("sort.order") as "asc" | "desc" | undefined,
	}
}

// Перетворюємо клієнтські параметри у серверні критерії
export const transformFilterParamsToServerCriteria = (
	params: FilterBookParams,
): ServerFilterBookCriteria => {
	return {
		status: params.status,
		title: params.title,
		author: params.author,
		genre: params.genre
			? (mapBooks.genreClientToServer[params.genre] as PrismaGenre)
			: undefined,
		categories: mapArray(
			params.categories,
			mapBooks.categoriesClientToServer,
		) as PrismaCategories[] | undefined,
		targetAges: mapArray(
			params.targetAges,
			mapBooks.targetAgesClientToServer,
		) as PrismaTargetAges[] | undefined,
		series: params.series,
		publisher: params.publisher,
		publicationYear: params.publicationYear
			? parseInt(params.publicationYear)
			: undefined,
		bookType: mapArray(params.bookType, mapBooks.bookTypesClientToServer) as
			| PrismaBookTypes[]
			| undefined,
		originalLanguage: params.originalLanguage
			? (mapBooks.languageClientToServer[
					params.originalLanguage
			  ] as PrismaLanguage)
			: undefined,
		coverType: params.coverType
			? (mapBooks.coverTypeClientToServer[params.coverType] as PrismaCoverType)
			: undefined,
		priceMin: params.priceMin ? parseFloat(params.priceMin) : undefined,
		priceMax: params.priceMax ? parseFloat(params.priceMax) : undefined,
	}
}
