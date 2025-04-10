//src/hooks/useUpdateAvatar.ts
"use client"

import { useAuthStore } from "@/stores/authStore"
import { ApiErrorResponse } from "@/types/interfaces"
import axios, { AxiosError } from "axios"
import { Dispatch, SetStateAction, useState } from "react"
import { AccountFormData } from "../types/interfaces"
import { User } from "../types/models"

interface UseUpdateAvatarProps {
	setFormData: Dispatch<SetStateAction<AccountFormData>>
	setServerError: (error: string | null) => void
}

export const useUpdateAvatar = ({
	setFormData,
	setServerError,
}: UseUpdateAvatarProps) => {
	const { user, accessToken, tokenType, setUser } = useAuthStore()
	const [isAvatarUpdating, setIsAvatarUpdating] = useState(false)

	const handleAvatarChange = async (file: File | null) => {
		if (!user) {
			setServerError("User not found")
			return
		}

		if (!accessToken || !tokenType) {
			setServerError("Not authenticated. Please log in.")
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
					Authorization: `${tokenType} ${accessToken}`,
				},
			})

			const updatedUser = response.data as User
			setUser(updatedUser)
			setFormData(prev => ({
				...prev,
				avatar: updatedUser.avatar || "",
			}))

			setServerError(null)
		} catch (error) {
			const axiosError = error as AxiosError<ApiErrorResponse>
			console.error("Помилка при оновленні аватара:", axiosError)

			if (axiosError.response) {
				const message =
					axiosError.response.data?.message ||
					`Failed to update avatar (Status: ${axiosError.response.status})`
				setServerError(message)
			} else if (axiosError.request) {
				setServerError("No response received. Please check your network.")
			} else {
				setServerError(`Error: ${axiosError.message || "Unknown error"}`)
			}
		} finally {
			setIsAvatarUpdating(false)
		}
	}

	return { handleAvatarChange, isAvatarUpdating }
}
