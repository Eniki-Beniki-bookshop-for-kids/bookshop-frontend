import "server-only"

import { User } from "@/types/models"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.SUPABASE_SERVICE_ROLE_KEY!,
)

export const uploadAvatar = async (
	file: File,
	userId: string,
): Promise<string> => {
	const fileExt = file.name.split(".").pop()
	const fileName = `${userId}-${Date.now()}.${fileExt}`
	const filePath = `avatars/${fileName}`

	const { error } = await supabase.storage
		.from("avatars")
		.upload(filePath, file, {
			cacheControl: "3600",
			upsert: false,
		})

	if (error) {
		throw new Error(`Failed to upload avatar: ${error.message}`)
	}

	// Отримуємо публічний URL аватара
	const { data } = supabase.storage.from("avatars").getPublicUrl(filePath)

	if (!data?.publicUrl) {
		throw new Error("Failed to get public URL for avatar")
	}

	return data.publicUrl
}

export const deleteAvatar = async (avatarUrl: string) => {
	if (!avatarUrl) return

	// Витягуємо шлях до файлу з URL
	const filePath = avatarUrl.split("/").slice(-2).join("/")
	const { error } = await supabase.storage.from("avatars").remove([filePath])

	if (error) {
		throw new Error(`Failed to delete avatar: ${error.message}`)
	}
}

export const updateUserAvatar = async (
	userId: string,
	avatarUrl: string | "",
) => {
	const { error } = await supabase.auth.admin.updateUserById(userId, {
		user_metadata: { avatar: avatarUrl },
	})

	if (error) {
		throw new Error(`Failed to update user avatar: ${error.message}`)
	}
}

export const getUserById = async (userId: string): Promise<User> => {
	const { data, error } = await supabase.auth.admin.getUserById(userId)
	if (error) {
		throw new Error(`Failed to fetch user: ${error.message}`)
	}
	return data.user as User
}
