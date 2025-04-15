//src/utils/serverUtils/mapServerUserToUser.ts
import { ServerUser, User } from "@/types/models"

export const mapServerUserToUser = (serverUser: ServerUser): User => ({
	userId: serverUser.userId,
	supabaseId: serverUser.supabaseId ?? null,
	email: serverUser.email,
	firstName: serverUser.firstName ?? null,
	lastName: serverUser.lastName ?? null,
	phoneNumber: serverUser.phoneNumber ?? null,
	dateOfBirth: serverUser.dateOfBirth?.toISOString().split("T")[0] ?? null,
	gender: serverUser.gender ?? null,
	address: serverUser.address ?? null,
	city: serverUser.city ?? null,
	postalCode: serverUser.postalCode ?? null,
	country: serverUser.country ?? null,
	role: (serverUser.role as User["role"]) ?? null,
	googleId: serverUser.googleId ?? null,
	avatar: serverUser.avatar ?? null,
	isActive: serverUser.isActive,
	favoriteBooks: serverUser.favoriteBooks,
	createdAt: serverUser.createdAt.toISOString(),
	updatedAt: serverUser.updatedAt.toISOString(),
})
