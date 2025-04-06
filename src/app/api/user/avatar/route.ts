import "server-only"

import {
	deleteAvatar,
	getUserById,
	updateUserAvatar,
	uploadAvatar,
} from "@/lib/supabase"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
	const userId = request.headers.get("x-user-id")
	const currentAvatar = request.headers.get("x-current-avatar")

	if (!userId) {
		return NextResponse.json(
			{ message: "User ID is required" },
			{ status: 400 },
		)
	}

	try {
		const formData = await request.formData()
		const file = formData.get("avatar") as File | null

		if (!file) {
			// Якщо файл не передано, це запит на видалення аватара
			if (currentAvatar) {
				await deleteAvatar(currentAvatar)
			}
			await updateUserAvatar(userId, "")
			const updatedUser = await getUserById(userId)
			return NextResponse.json(updatedUser)
		}

		// Завантажуємо новий аватар
		const avatarUrl = await uploadAvatar(file, userId)

		// Видаляємо старий аватар, якщо він є
		if (currentAvatar) {
			await deleteAvatar(currentAvatar)
		}

		// Оновлюємо профіль користувача
		await updateUserAvatar(userId, avatarUrl)

		// Отримуємо оновлені дані користувача
		const updatedUser = await getUserById(userId)
		return NextResponse.json(updatedUser)
	} catch (error) {
		return NextResponse.json(
			{ message: (error as Error).message },
			{ status: 500 },
		)
	}
}
