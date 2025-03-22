"use client"

import { useModal } from "@/context/ModalContext"
import { useAuthStore } from "@/stores/authStore"
import { useRouter } from "next/navigation"

export const useUserAvatar = () => {
	const user = useAuthStore(state => state.user)
	const router = useRouter()
	const { openModal } = useModal()

	const handleUserClick = () => {
		if (user) {
			router.push("/account")
		} else {
			openModal("login")
		}
	}

	const getAvatarUrl = () => {
		if (!user) return null

		// Якщо авторизація через Google (googleId є) і є avatar
		if (user.googleId && user.avatar) {
			return user.avatar
		}

		// Якщо авторизація через email, повертаємо null
		return null
	}

	const avatarUrl = getAvatarUrl()

	return { avatarUrl, handleUserClick }
}
