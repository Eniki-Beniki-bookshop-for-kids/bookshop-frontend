// src/utils/generateTokens.ts
import jwt from "jsonwebtoken"
import { UserRole } from "../types/models"

export const generateTokens = (
	userId: number,
	email: string,
	role: string | UserRole,
) => {
	const JWT_SECRET = process.env.JWT_SECRET
	if (!JWT_SECRET) {
		throw new Error("JWT_SECRET is not defined in environment variables")
	}

	const accessToken = jwt.sign(
		{ userId, email, role },
		JWT_SECRET!,
		{ expiresIn: "15m" }, // Access token дійсний 15 хвилин
	)

	const refreshToken = jwt.sign(
		{ userId, email },
		JWT_SECRET!,
		{ expiresIn: "7d" }, // Refresh token дійсний 7 днів
	)

	return { accessToken, refreshToken }
}
