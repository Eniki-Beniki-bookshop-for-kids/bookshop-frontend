// src/app/api/auth/email/route.ts
import { createUser, findUserByEmail } from "@/app/api/db"
import { User, UserRole } from "@/types/models"
import bcrypt from "bcryptjs"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
	try {
		const { email, password, isRegister } = await request.json()

		if (!email) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 },
			)
		}

		const existingUser = findUserByEmail(email)

		if (isRegister) {
			// Реєстрація
			if (existingUser) {
				return NextResponse.json(
					{ error: "User already exists" },
					{ status: 400 },
				)
			}

			if (!password) {
				return NextResponse.json(
					{ error: "Password is required for registration" },
					{ status: 400 },
				)
			}

			const hashedPassword = await bcrypt.hash(password, 10)
			const newUser: Omit<User, "userId" | "createdAt" | "updatedAt"> = {
				email,
				password: hashedPassword,
				role: UserRole.User,
				isActive: true,
				favoriteBooks: [],
			}

			const createdUser = createUser(newUser)
			return NextResponse.json(createdUser, { status: 201 })
		} else {
			// Логін
			if (!existingUser || !existingUser.password) {
				return NextResponse.json(
					{ error: "Invalid email or password" },
					{ status: 401 },
				)
			}

			const isPasswordValid = await bcrypt.compare(
				password,
				existingUser.password,
			)
			if (!isPasswordValid) {
				return NextResponse.json(
					{ error: "Invalid email or password" },
					{ status: 401 },
				)
			}

			return NextResponse.json(existingUser, { status: 200 })
		}
	} catch (error) {
		console.error("Error in email auth:", error)
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		)
	}
}
