// src/app/api/books/[id]/route.ts
import "server-only"

import prisma from "@/lib/prismaClient"
import { transformServerToClientBook } from "@/utils/books"
import { NextResponse } from "next/server"

export async function GET(
	request: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	const resolvedParams = await params
	const bookId = parseInt(resolvedParams.id)

	try {
		// Перевіряємо, чи bookId є числом
		if (isNaN(bookId) || bookId < 1) {
			return NextResponse.json({ error: "Invalid book ID" }, { status: 400 })
		}

		// Шукаємо книгу за bookId
		const book = await prisma.book.findUnique({
			where: { bookId },
		})

		// Якщо книга не знайдена
		if (!book) {
			return NextResponse.json({ error: "Book not found" }, { status: 404 })
		}

		// Перетворюємо серверні значення у клієнтські
		const mappedBook = transformServerToClientBook(book)

		return NextResponse.json(mappedBook)
	} catch (error) {
		console.error("Error fetching book:", error)
		return NextResponse.json({ error: "Failed to fetch book" }, { status: 500 })
	} finally {
		await prisma.$disconnect()
	}
}
