//src/lib/supabase.ts
import "server-only"

import { createClient } from "@supabase/supabase-js"
import { getSupabaseIdByUserId } from "../utils/serverUtils"

export const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.SUPABASE_SERVICE_ROLE_KEY!,
)

// Функція для завантаження аватара
export async function uploadAvatar(
	file: File,
	userId: string,
): Promise<string> {
	const fileExt = file.name.split(".").pop()
	const fileName = `${userId}-${Date.now()}.${fileExt}`

	const { error } = await supabase.storage
		.from("avatars")
		.upload(fileName, file, {
			cacheControl: "3600",
			upsert: true,
			contentType: file.type,
		})

	if (error) {
		console.error("Error uploading file:", error)
		throw new Error(`Failed to upload avatar: ${error.message}`)
	}

	// Генеруємо підписаний URL
	const { data: signedUrlData, error: signedError } = await supabase.storage
		.from("avatars")
		.createSignedUrl(fileName, 30000000) // приблизно 1 рік діє токен

	if (signedError) {
		console.error("Error generating signed URL:", signedError)
		throw new Error(`Failed to generate signed URL: ${signedError.message}`)
	}

	return signedUrlData.signedUrl
}

// Функція для видалення аватара
export async function deleteAvatar(avatarUrl: string) {
	try {
		// Видаляємо старий аватар, витягуючи ім'я файлу з URL
		const fileName = avatarUrl.split("/").pop()?.split("?")[0]
		if (fileName) {
			const { error } = await supabase.storage
				.from("avatars")
				.remove([fileName])

			if (error) {
				throw new Error(`Error deleting file: ${error.message}`)
			}
		}
	} catch (error) {
		console.error("Error deleting avatar:", error)
		throw new Error(`Failed to delete avatar: ${(error as Error).message}`)
	}
}

// Функція для оновлення аватара у Supabase Auth
export async function updateUserAvatar(userId: string, avatarUrl: string | "") {
	const supabaseUserId = await getSupabaseIdByUserId(userId)
	const { error } = await supabase.auth.admin.updateUserById(supabaseUserId, {
		user_metadata: { avatar: avatarUrl },
	})

	if (error) {
		throw new Error(`Failed to update user avatar: ${error.message}`)
	}
}
