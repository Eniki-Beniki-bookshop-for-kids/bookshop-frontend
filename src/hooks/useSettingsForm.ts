"use client"

import { useAuthStore } from "@/stores/authStore"
import { useState } from "react"
import { updateUser } from "../app/api/db"
import { AccountFormData } from "../types/interfaces"
import { Gender } from "../types/models"
import { validateForm } from "../utils"
import { settingsSchema } from "../utils/validationSchemas"

export const useSettingsForm = () => {
	const { user, setUser } = useAuthStore()

	const [formData, setFormData] = useState<AccountFormData>({
		firstName: user?.firstName || "",
		lastName: user?.lastName || "",
		phoneNumber: user?.phoneNumber || "",
		email: user?.email || "",
		dateOfBirth: user?.dateOfBirth || "",
		gender: user?.gender || Gender.male,
		avatar: user?.avatar || "",
	})

	const [errors, setErrors] = useState<
		Partial<Record<keyof AccountFormData, string>>
	>({})

	// Додаємо стани лоадінгу
	const [isAvatarUpdating, setIsAvatarUpdating] = useState(false)
	const [isUserUpdating, setIsUserUpdating] = useState(false)

	// Валідація даних юзера
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
					phoneNumber: value ? `+380${value}` : "", // Додаємо префікс
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
				// Імітуємо асинхронний запит
				await new Promise(resolve => setTimeout(resolve, 1000))
				setUser({ ...user, avatar: newAvatar })
			}
		} catch (error) {
			console.error("Помилка при оновленні аватара:", error)
		} finally {
			setIsAvatarUpdating(false)
		}
	}

	const handleSubmit = async () => {
		if (!user) return

		setIsUserUpdating(true)
		try {
			const { isValid, validationErrors } = validate()
			if (isValid) {
				const updatedUser = { ...user, ...formData }

				// Імітуємо асинхронний запит
				await new Promise(resolve => setTimeout(resolve, 1000))
				setUser(updatedUser)
				if (user.userId) {
					await updateUser(user.userId, formData)
				}
			} else {
				console.log("Помилки валідації:", validationErrors)
			}
		} catch (error) {
			console.error("Помилка при оновленні користувача:", error)
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
	}
}
