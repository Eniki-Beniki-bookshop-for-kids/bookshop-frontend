//src/app/api/user/update/route.ts
import "server-only"

import prisma from "@/lib/prismaClient"
import { AccountFormData } from "@/types/interfaces"
import { verifyToken } from "@/utils/"
import { toPrismaGender } from "@/utils/genderMapping"
import _ from "lodash"
import { NextRequest, NextResponse } from "next/server"

interface UpdateUserRequest extends AccountFormData {
	userId: number
}

export async function PATCH(req: NextRequest) {
	try {
		// Отримуємо токен із заголовків
		const authHeader = req.headers.get("Authorization")
		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			return NextResponse.json(
				{ message: "Authorization header missing or invalid" },
				{ status: 401 },
			)
		}

		const JWT_SECRET = process.env.JWT_SECRET
		if (!JWT_SECRET) {
			return NextResponse.json(
				{ message: "JWT_SECRET is not defined" },
				{ status: 500 },
			)
		}

		const token = authHeader.split(" ")[1]
		// Перевіряємо токен
		const decodedToken = verifyToken(token)
		if (!decodedToken) {
			return NextResponse.json(
				{ message: "Invalid or expired token" },
				{ status: 401 },
			)
		}

		// Отримуємо дані з тіла запиту
		const {
			userId,
			firstName,
			lastName,
			phoneNumber,
			email,
			dateOfBirth,
			gender,
		}: UpdateUserRequest = await req.json()

		// Перевіряємо, чи userId із заголовка збігається з userId із токена
		if (userId !== decodedToken.userId) {
			return NextResponse.json(
				{ message: "User ID does not match authenticated user" },
				{ status: 403 },
			)
		}

		// Перевіряємо, чи існує користувач
		const existingUser = await prisma.user.findUnique({
			where: { userId },
		})

		if (!existingUser) {
			return NextResponse.json({ message: "User not found" }, { status: 404 })
		}

		// Перевіряємо, чи email не зайнятий іншим користувачем
		if (email !== existingUser.email) {
			const userWithEmail = await prisma.user.findUnique({
				where: { email },
			})
			if (userWithEmail && userWithEmail.userId !== userId) {
				return NextResponse.json(
					{ message: "Email is already in use by another user" },
					{ status: 400 },
				)
			}
		}

		// Перетворюємо gender у значення, яке очікує Prisma
		const prismaGender = toPrismaGender(gender)

		// Оновлюємо користувача
		const updatedUser = await prisma.user.update({
			where: { userId },
			data: {
				firstName,
				lastName,
				phoneNumber,
				email,
				dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
				gender: prismaGender,
				updatedAt: new Date(),
			},
		})

		const userWithoutPassword = _.omit(updatedUser, ["password"])

		return NextResponse.json(userWithoutPassword, { status: 200 })
	} catch (error) {
		console.error("Error in /api/user/update:", error)
		return NextResponse.json(
			{ message: "Internal server error", error: (error as Error).message },
			{ status: 500 },
		)
	}
}
