// src/app/api/user/save/route.ts
import prisma from "@/lib/prismaClient"
import { generateTokens } from "@/utils/serverUtils"
import _ from "lodash"
import { NextRequest, NextResponse } from "next/server"

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

	const mappedUser = {
		supabaseId: id,
		firstName,
		lastName,
		avatar: user_metadata.picture || "",
		googleId: user_metadata.sub || null,
		updatedAt: new Date(),
	}

	try {
		// Шукаємо користувача за email
		let dbUser = await prisma.user.findUnique({
			where: { email },
		})

		if (dbUser) {
			// Якщо користувач із таким email уже існує, оновлюємо його supabaseId та інші поля
			dbUser = await prisma.user.update({
				where: { email },
				data: mappedUser,
			})
		} else {
			// Якщо користувача немає, створюємо нового
			dbUser = await prisma.user.create({
				data: {
					createdAt: new Date(),
					email,
					...mappedUser,
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
