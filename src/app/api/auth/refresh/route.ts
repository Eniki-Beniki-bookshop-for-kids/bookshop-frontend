//src/app/api/auth/refresh/route.ts

import "server-only"

import prisma from "@/lib/prismaClient"
import { generateTokens } from "@/utils/serverUtils"
import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
	try {
		// Отримуємо refreshToken із тіла запиту
		const { refreshToken } = await req.json()

		if (!refreshToken || typeof refreshToken !== "string") {
			return NextResponse.json(
				{ message: "Refresh token is required" },
				{ status: 400 },
			)
		}

		const JWT_SECRET = process.env.JWT_SECRET
		if (!JWT_SECRET) {
			return NextResponse.json(
				{ message: "JWT_SECRET is not defined" },
				{ status: 500 },
			)
		}

		// Перевіряємо refreshToken
		let decoded
		try {
			decoded = jwt.verify(refreshToken, JWT_SECRET) as {
				userId: number
				email: string
				role: string
			}
		} catch {
			return NextResponse.json(
				{ message: "Invalid or expired refresh token" },
				{ status: 401 },
			)
		}

		// Перевіряємо, чи існує користувач
		const user = await prisma.user.findUnique({
			where: { userId: decoded.userId },
		})

		if (!user || !user.isActive) {
			return NextResponse.json(
				{ message: "User not found or inactive" },
				{ status: 404 },
			)
		}

		const { userId, email, role } = user
		// Генеруємо нові токени
		const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
			generateTokens(userId, email, role)

		return NextResponse.json(
			{
				accessToken: newAccessToken,
				refreshToken: newRefreshToken,
				tokenType: "Bearer",
			},
			{ status: 200 },
		)
	} catch (error) {
		console.error("Error in /api/auth/refresh:", error)
		return NextResponse.json(
			{ message: "Internal server error", error: (error as Error).message },
			{ status: 500 },
		)
	}
}
