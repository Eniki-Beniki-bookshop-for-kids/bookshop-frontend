// scr/hooks/useSettingsForm.ts
"use client"

import { useAuthStore } from "@/stores/authStore"
import axios, { AxiosError } from "axios"
import { useState } from "react"
import { AccountFormData } from "../types/interfaces"
import { User } from "../types/models"
import { formatDateForInput, fromPrismaGender, validateForm } from "../utils"
import { settingsSchema } from "../utils/validationSchemas"

export const useSettingsForm = () => {
	const {
		user,
		setUser,
		accessToken,
		refreshToken,
		tokenType,
		setTokens,
		logout,
	} = useAuthStore()

	const [formData, setFormData] = useState<AccountFormData>({
		firstName: user?.firstName || "",
		lastName: user?.lastName || "",
		phoneNumber: user?.phoneNumber || "",
		email: user?.email || "",
		dateOfBirth: formatDateForInput(user?.dateOfBirth),
		gender: fromPrismaGender(user?.gender),
		avatar: user?.avatar || "",
	})

	const [errors, setErrors] = useState<
		Partial<Record<keyof AccountFormData, string>>
	>({})

	const [isAvatarUpdating, setIsAvatarUpdating] = useState(false)
	const [isUserUpdating, setIsUserUpdating] = useState(false)
	const [serverError, setServerError] = useState<string | null>(null)

	const validate = () => {
		const { errors: validationErrors, isValid } = validateForm(
			settingsSchema,
			formData,
		)
		setErrors(validationErrors)
		return { isValid, validationErrors }
	}

	const handleChange = (field: keyof AccountFormData, value: string) => {
		setFormData(prev => {
			if (field === "phoneNumber") {
				return {
					...prev,
					phoneNumber: value ? `+380${value}` : "",
				}
			}
			return { ...prev, [field]: value }
		})
	}

	const handleAvatarChange = async (newAvatar: string | "") => {
		setIsAvatarUpdating(true)
		try {
			setFormData(prev => ({
				...prev,
				avatar: newAvatar,
			}))
			if (user) {
				// TODO: Оновлення аватара через Supabase Storage
				await new Promise(resolve => setTimeout(resolve, 1000))
				setUser({ ...user, avatar: newAvatar })
			}
		} catch (error) {
			console.error("Помилка при оновленні аватара:", error)
			setServerError("Failed to update avatar")
		} finally {
			setIsAvatarUpdating(false)
		}
	}

	const refreshAccessToken = async () => {
		if (!refreshToken) {
			throw new Error("No refresh token available")
		}

		try {
			const response = await axios.post("/api/auth/refresh", { refreshToken })
			const {
				accessToken: newAccessToken,
				refreshToken: newRefreshToken,
				tokenType: newTokenType,
			} = response.data
			setTokens(newAccessToken, newRefreshToken, newTokenType)
			return newAccessToken
		} catch (error) {
			const axiosError = error as AxiosError
			if (axiosError.response?.status === 401) {
				// Refresh token протух
				logout()
				throw new Error("Session expired. Please log in again.")
			}
			throw error
		}
	}

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
				// Модалка авторизації відкриється автоматично через стан user === null після logout
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

	return {
		formData,
		errors,
		handleChange,
		handleSubmit,
		handleAvatarChange,
		isAvatarUpdating,
		isUserUpdating,
		serverError,
	}
}
