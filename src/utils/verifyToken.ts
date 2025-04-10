// src/utils/verifyToken.ts
import jwt from "jsonwebtoken"

export const verifyToken = (
	token: string | null,
): { userId: number } | null => {
	if (!token) return null

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
			userId: number
			email: string
			role: string
		}
		return { userId: decoded.userId }
	} catch (error) {
		console.error("Error verifying token:", error)
		return null
	}
}
