// src/app/api/user/save/route.ts
import prisma from "@/lib/prismaClient"
import { generateTokens } from "@/utils/serverUtils"
import _ from "lodash"
import { NextRequest, NextResponse } from "next/server"

interface UpdateUserData {
	supabaseId: string
	firstName: string
	lastName: string
	googleId: string | null
	updatedAt: Date
	avatar?: string
}

export async function POST(request: NextRequest) {
	const { user } = await request.json()

	if (!user || !user.email) {
		return NextResponse.json(
			{ error: "Некоректні дані користувача" },
			{ status: 400 },
		)
	}

	const { id, email, user_metadata } = user
	const [firstName, lastName] = (user_metadata.full_name || "").split(" ")

	try {
		// Шукаємо користувача за email
		let dbUser = await prisma.user.findUnique({
			where: { email },
		})

		const updateData: UpdateUserData = {
			supabaseId: id,
			firstName,
			lastName,
			googleId: user_metadata.sub || null,
			updatedAt: new Date(),
		}

		if (dbUser) {
			// Якщо користувач існує, оновлюємо дані, але не чіпаємо аватар, якщо він уже є
			if (!dbUser.avatar) {
				updateData.avatar = user_metadata.picture || ""
			}
			dbUser = await prisma.user.update({
				where: { email },
				data: updateData,
			})
		} else {
			// Якщо користувача немає, створюємо нового з аватаром із Google
			dbUser = await prisma.user.create({
				data: {
					createdAt: new Date(),
					email,
					avatar: user_metadata.picture || "",
					...updateData,
				},
			})
		}

		// Генеруємо токени на сервері
		const { accessToken, refreshToken } = generateTokens(
			dbUser.userId,
			dbUser.email,
			dbUser.role,
		)

		const userWithoutPassword = _.omit(dbUser, ["password"]) // Видаляємо поле password із відповіді

		return NextResponse.json({
			user: userWithoutPassword,
			accessToken,
			refreshToken,
			tokenType: "Bearer",
		})
	} catch (error) {
		console.error(
			"Помилка при збереженні користувача через Prisma:",
			error instanceof Error ? error.message : error,
		)
		return NextResponse.json(
			{ error: "Не вдалося зберегти користувача через Prisma" },
			{ status: 500 },
		)
	}
}
