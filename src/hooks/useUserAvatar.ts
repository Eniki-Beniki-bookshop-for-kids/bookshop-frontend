//src/app/api/user/avatar/route.ts
"use client"

import { useModal } from "@/context/ModalContext"
import { useAuthStore } from "@/stores/authStore"
import { useRouter } from "next/navigation"

export const useUserAvatar = () => {
	const { user } = useAuthStore()
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

		if (user.avatar) {
			return user.avatar
		}

		return null
	}

	const avatarUrl = getAvatarUrl()

	return { avatarUrl, handleUserClick }
}
