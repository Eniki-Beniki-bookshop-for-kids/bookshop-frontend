// src/hooks/useSettingsForm.ts
"use client"

import { useAuthStore } from "@/stores/authStore"
import { useState } from "react"
import { updateUser } from "../app/api/db"
import { Gender } from "../types/models"
import { validateForm } from "../utils"
import { settingsSchema } from "../utils/validationSchemas"

export type FormData = {
	firstName: string
	lastName: string
	phoneNumber: string
	email: string
	dateOfBirth: string
	gender: Gender
	avatar?: string
}

export const useSettingsForm = () => {
	const { user, setUser } = useAuthStore()

	// Ініціалізація даних
	const [formData, setFormData] = useState<FormData>({
		firstName: user?.firstName || "",
		lastName: user?.lastName || "",
		phoneNumber: user?.phoneNumber || "",
		email: user?.email || "",
		dateOfBirth: user?.dateOfBirth || "",
		gender: user?.gender || Gender.male,
		avatar: user?.avatar || "",
	})

	const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
		{},
	)

	const handleChange = (field: keyof FormData, value: string) => {
		setFormData(prev => ({ ...prev, [field]: value }))
	}

	const handleAvatarChange = (newAvatar: string | "") => {
		setFormData(prev => ({
			...prev,
			avatar: newAvatar,
		}))
		if (user) {
			setUser({ ...user, avatar: newAvatar })
		}
	}

	const validate = () => {
		const { errors: validationErrors, isValid } = validateForm(
			settingsSchema,
			formData,
		)
		setErrors(validationErrors)
		return { isValid, validationErrors }
	}

	const handleSubmit = () => {
		if (!user) return

		const { isValid, validationErrors } = validate()
		if (isValid) {
			const updatedUser = { ...user, ...formData }
			setUser(updatedUser)
			if (user.userId) {
				updateUser(user.userId, formData)
			}
		} else {
			console.log("Помилки валідації:", validationErrors)
		}
	}

	return {
		formData,
		errors,
		handleChange,
		handleSubmit,
		handleAvatarChange,
	}
}
