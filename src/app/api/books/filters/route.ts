// src/app/api/books/filters/route.ts
import "server-only"

import prisma from "@/lib/prismaClient"
import {
	buildBookWhereClause,
	filterBookParams,
	transformFilterParamsToServerCriteria,
	transformServerToClientBook,
} from "@/utils/books"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)

	try {
		// Витягуємо параметри
		const params = filterBookParams(searchParams)

		// Перетворюємо у серверні критерії
		const criteria = transformFilterParamsToServerCriteria(params)

		// Будуємо Prisma where
		const where = buildBookWhereClause(criteria)

		// Сортування
		const orderBy: Record<string, "asc" | "desc"> = params.sortField
			? { [params.sortField]: (params.sortOrder as "asc" | "desc") || "asc" }
			: { createdAt: "desc" }

		// Виконуємо запит
		const [books, total] = await Promise.all([
			prisma.book.findMany({
				where,
				orderBy,
				skip: (params.page - 1) * params.limit,
				take: params.limit,
			}),
			prisma.book.count({ where }),
		])

		// Перетворюємо серверні значення у клієнтські
		const mappedBooks = books.map(transformServerToClientBook)

		return NextResponse.json({
			books: mappedBooks,
			total,
		})
	} catch {
		return NextResponse.json(
			{ error: "Failed to fetch filtered books" },
			{ status: 500 },
		)
	} finally {
		await prisma.$disconnect()
	}
}
