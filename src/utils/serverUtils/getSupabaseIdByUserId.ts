//src/utils/serverUtils/getSupabaseIdByUserId.ts
import prisma from "@/lib/prismaClient"

export const getSupabaseIdByUserId = async (
	userId: string,
): Promise<string> => {
	const user = await prisma.user.findUnique({
		where: { userId: parseInt(userId) },
		select: { supabaseId: true },
	})

	if (!user || !user.supabaseId) {
		throw new Error(`Supabase user ID not found for userId: ${userId}`)
	}

	return user.supabaseId
}
