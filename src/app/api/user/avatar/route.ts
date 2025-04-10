//src/app/api/user/avatar/route.ts
import "server-only"

import prisma from "@/lib/prismaClient"
import { deleteAvatar, updateUserAvatar, uploadAvatar } from "@/lib/supabase"
import { verifyToken } from "@/utils"
import { mapServerUserToUser } from "@/utils/serverUtils"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
	// Перевірка автентифікації
	const authHeader = request.headers.get("Authorization")
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return NextResponse.json(
			{ message: "Authorization header missing or invalid" },
			{ status: 401 },
		)
	}

	const token = authHeader.split(" ")[1]
	const decodedToken = verifyToken(token)
	if (!decodedToken) {
		return NextResponse.json(
			{ message: "Invalid or expired token" },
			{ status: 401 },
		)
	}

	const userIdFromToken = decodedToken.userId.toString()
	const userIdFromHeader = request.headers.get("x-user-id")
	const currentAvatar = request.headers.get("x-current-avatar")

	if (!userIdFromHeader) {
		return NextResponse.json(
			{ message: "User ID is required" },
			{ status: 400 },
		)
	}

	// Перевіряємо, чи userId із заголовка збігається з userId із токена
	if (userIdFromHeader !== userIdFromToken) {
		return NextResponse.json(
			{ message: "User ID does not match authenticated user" },
			{ status: 403 },
		)
	}

	try {
		const formData = await request.formData()
		const file = formData.get("avatar") as File | null

		let avatarUrl: string | "" = ""

		if (!file) {
			// Якщо файл не передано, це запит на видалення аватара
			if (currentAvatar) {
				await deleteAvatar(currentAvatar)
			}
			avatarUrl = ""
		} else {
			// Завантажуємо новий аватар
			avatarUrl = await uploadAvatar(file, userIdFromHeader)

			// Видаляємо старий аватар, якщо він є
			if (currentAvatar) {
				await deleteAvatar(currentAvatar)
			}
		}

		// Оновлюємо аватар у Supabase Auth
		await updateUserAvatar(userIdFromHeader, avatarUrl)

		// Оновлюємо аватар у базі даних
		const updatedServerUser = await prisma.user.update({
			where: { userId: parseInt(userIdFromHeader) },
			data: { avatar: avatarUrl },
		})

		// Повертаємо оновленого користувача у форматі User
		const updatedUser = mapServerUserToUser(updatedServerUser)
		return NextResponse.json(updatedUser, { status: 200 })
	} catch (error) {
		console.error("Error in /api/user/avatar:", error)
		return NextResponse.json(
			{
				message: "Failed to update avatar",
				error: (error as Error).message,
			},
			{ status: 500 },
		)
	}
}
