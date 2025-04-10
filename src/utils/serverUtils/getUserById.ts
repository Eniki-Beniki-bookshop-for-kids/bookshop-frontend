// src/utils/getUserById.ts
import prisma from "@/lib/prismaClient"
import { ServerUser } from "@/types/models"

export const getUserById = async (userId: string): Promise<ServerUser> => {
	const user = await prisma.user.findUnique({
		where: { userId: parseInt(userId) },
	})

	if (!user) {
		throw new Error(
			`Failed to fetch user: User not found for userId: ${userId}`,
		)
	}

	return user as ServerUser
}
