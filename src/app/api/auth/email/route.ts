// src/app/api/email/route.ts
import "server-only"

import prisma from "@/lib/prismaClient"
import { generateTokens } from "@/utils/serverUtils"
import { createClient } from "@supabase/supabase-js"
import bcrypt from "bcrypt"
import _ from "lodash"
import { NextRequest, NextResponse } from "next/server"

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.SUPABASE_SERVICE_ROLE_KEY!,
)

interface EmailAuthRequest {
	email: string
	password: string
	endpoint: "signup" | "login"
}

export async function POST(req: NextRequest) {
	try {
		const { email, password, endpoint }: EmailAuthRequest = await req.json()

		// Перевірка вхідних даних
		if (!email || !password) {
			return NextResponse.json(
				{ message: "Email і пароль обов'язкові" },
				{ status: 400 },
			)
		}

		// Перевірка, чи вказано правильний endpoint
		if (!["signup", "login"].includes(endpoint)) {
			return NextResponse.json(
				{ message: "Invalid endpoint. Use 'signup' or 'login'." },
				{ status: 400 },
			)
		}

		// Реєстрація
		if (endpoint === "signup") {
			const existingUser = await prisma.user.findUnique({
				where: { email },
			})

			if (existingUser) {
				return NextResponse.json(
					{ message: "Користувач з таким email вже зареєстрований" },
					{ status: 400 },
				)
			}

			// Створюємо користувача у Supabase Auth
			const { data, error } = await supabase.auth.admin.createUser({
				email,
				password,
				email_confirm: true, // TODO: Поки автоматично підтверджуємо email. Треба створити логіку підтвердження email
			})

			if (error) {
				return NextResponse.json(
					{
						message: `Failed to create user in Supabase Auth: ${error.message}`,
					},
					{ status: 400 },
				)
			}

			const supabaseUserId = data.user?.id // Отримуємо Supabase Auth ID (UUID)

			if (!supabaseUserId) {
				return NextResponse.json(
					{ message: "Failed to get Supabase user ID" },
					{ status: 500 },
				)
			}

			const hashedPassword = await bcrypt.hash(password, 10)

			const user = await prisma.user.create({
				data: {
					email,
					password: hashedPassword,
					supabaseId: supabaseUserId,
					isActive: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			})

			const { userId, role } = user
			const { accessToken, refreshToken } = generateTokens(userId, email, role) // Генерація токенів

			const userWithoutPassword = _.omit(user, ["password"]) // Видаляємо поле password із відповіді

			return NextResponse.json(
				{
					user: userWithoutPassword,
					accessToken,
					refreshToken,
					tokenType: "Bearer",
				},
				{ status: 201 },
			)
		}

		// Логін
		if (endpoint === "login") {
			const user = await prisma.user.findUnique({
				where: { email },
			})

			if (!user) {
				return NextResponse.json(
					{ message: "Некоректний email або пароль" },
					{ status: 401 },
				)
			}

			// Перевірка пароля
			const isPasswordValid = await bcrypt.compare(password, user.password!)
			if (!isPasswordValid || !user) {
				return NextResponse.json(
					{ message: "Некоректний email або пароль" },
					{ status: 401 },
				)
			}

			const { userId, role } = user
			const { accessToken, refreshToken } = generateTokens(userId, email, role)
			const userWithoutPassword = _.omit(user, ["password"])

			return NextResponse.json(
				{
					user: userWithoutPassword,
					accessToken,
					refreshToken,
					tokenType: "Bearer",
				},
				{ status: 200 },
			)
		}
	} catch (error) {
		console.error("Error in /api/email:", error)
		return NextResponse.json(
			{ message: "Internal server error", error: (error as Error).message },
			{ status: 500 },
		)
	}
}
