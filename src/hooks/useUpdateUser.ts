//src/hooks/useUpdateUser.ts
"use client"

import { useAuthStore } from "@/stores/authStore"
import axios, { AxiosError } from "axios"
import { useState } from "react"
import { AccountFormData } from "../types/interfaces"
import { User } from "../types/models"
import { useAuthRefresh } from "./useAuthRefresh"

interface UseUpdateUserProps {
	formData: AccountFormData
	validate: () => {
		isValid: boolean
		validationErrors: Partial<Record<keyof AccountFormData, string>>
	}
}

export const useUpdateUser = ({ formData, validate }: UseUpdateUserProps) => {
	const { user, setUser, accessToken, tokenType } = useAuthStore()
	const { refreshAccessToken } = useAuthRefresh()

	const [isUserUpdating, setIsUserUpdating] = useState(false)
	const [serverError, setServerError] = useState<string | null>(null)

	const handleSubmit = async () => {
		if (!user || !accessToken || !tokenType) {
			setServerError("User or tokens are missing")
			return
		}

		setIsUserUpdating(true)
		setServerError(null)

		try {
			const { isValid, validationErrors } = validate()
			if (isValid) {
				const updateData: AccountFormData & { userId: number } = {
					userId: user.userId,
					...formData,
				}

				try {
					const response = await axios.patch<User>(
						"/api/user/update",
						updateData,
						{
							headers: {
								Authorization: `${tokenType} ${accessToken}`,
								"Content-Type": "application/json",
							},
						},
					)
					setUser(response.data)
				} catch (error) {
					const axiosError = error as AxiosError
					if (axiosError.response?.status === 401) {
						// Access token протух, пробуємо оновити
						const newAccessToken = await refreshAccessToken()
						const { tokenType: updatedTokenType } = useAuthStore.getState()
						// Повторюємо запит із новим токеном
						const retryResponse = await axios.patch<User>(
							"/api/user/update",
							updateData,
							{
								headers: {
									Authorization: `${updatedTokenType} ${newAccessToken}`,
									"Content-Type": "application/json",
								},
							},
						)
						setUser(retryResponse.data)
					} else {
						throw error
					}
				}
			} else {
				console.log("Помилки валідації:", validationErrors)
			}
		} catch (error) {
			const axiosError = error as AxiosError
			if (axiosError.message === "Session expired. Please log in again.") {
				setServerError("Сесія закінчилася. Будь ласка, увійдіть знову.")
			} else if (axiosError.response) {
				setServerError(
					(axiosError.response?.data as { message?: string })?.message ||
						"Не вдалося оновити дані користувача",
				)
			} else {
				setServerError("Помилка мережі або сервер недоступний")
			}
		} finally {
			setIsUserUpdating(false)
		}
	}

	return { handleSubmit, isUserUpdating, serverError, setServerError }
}
