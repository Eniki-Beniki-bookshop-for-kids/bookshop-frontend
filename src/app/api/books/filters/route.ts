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
		const { limit, page, sortField, sortOrder } = params

		// Перевіряємо, чи limit та page є числом і більше рівне 1
		if (isNaN(limit) || isNaN(page) || limit < 1 || page < 1) {
			return NextResponse.json(
				{ error: "Invalid pagination data (limit or page)" },
				{ status: 400 },
			)
		}

		// Перетворюємо у серверні критерії
		const criteria = transformFilterParamsToServerCriteria(params)

		// Будуємо Prisma where
		const where = buildBookWhereClause(criteria)

		// Сортування
		const orderBy: Record<string, "asc" | "desc"> = sortField
			? { [sortField]: (sortOrder as "asc" | "desc") || "asc" }
			: { createdAt: "desc" }

		// Виконуємо запит із включенням зв’язаних даних
		const [books, total] = await Promise.all([
			prisma.book.findMany({
				where,
				orderBy,
				skip: (page - 1) * limit,
				take: limit,
				include: {
					reviews: true,
					orderBooks: true,
				},
			}),
			prisma.book.count({ where }),
		])

		// Перетворюємо серверні значення у клієнтські
		const mappedBooks = books.map(transformServerToClientBook)

		return NextResponse.json({
			books: mappedBooks,
			total,
		})
	} catch (error) {
		console.error("Error fetching books:", error)
		return NextResponse.json(
			{ error: "Failed to fetch filtered books" },
			{ status: 500 },
		)
	} finally {
		await prisma.$disconnect()
	}
}
