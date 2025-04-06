"use client"

import { useAuthStore } from "@/stores/authStore"
import axios from "axios"
import { useState } from "react"
import { AccountFormData } from "../types/interfaces"

interface UseUpdateAvatarProps {
	setFormData: React.Dispatch<React.SetStateAction<AccountFormData>>
	setServerError: (error: string | null) => void
}

export const useUpdateAvatar = ({
	setFormData,
	setServerError,
}: UseUpdateAvatarProps) => {
	const { user, setUser } = useAuthStore()
	const [isAvatarUpdating, setIsAvatarUpdating] = useState(false)

	const handleAvatarChange = async (file: File | null) => {
		if (!user) {
			setServerError("User not found")
			return
		}

		setIsAvatarUpdating(true)
		try {
			const formData = new FormData()
			if (file) {
				formData.append("avatar", file)
			}
			const response = await axios.post("/api/user/avatar", formData, {
				headers: {
					"x-user-id": user.userId.toString(),
					"x-current-avatar": user.avatar || "",
				},
			})

			const updatedUser = response.data
			setUser(updatedUser)
			setFormData(prev => ({
				...prev,
				avatar: updatedUser.avatar || "",
			}))
		} catch (error) {
			console.error("Помилка при оновленні аватара:", error)
			setServerError("Failed to update avatar")
		} finally {
			setIsAvatarUpdating(false)
		}
	}

	return { handleAvatarChange, isAvatarUpdating }
}
