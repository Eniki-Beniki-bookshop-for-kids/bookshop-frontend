//src/hooks/useFormManagement.ts
"use client"

import { useAuthStore } from "@/stores/authStore"
import { useState } from "react"
import { AccountFormData } from "../types/interfaces"
import { formatDateForInput, fromPrismaGender, validateForm } from "../utils"
import { settingsSchema } from "../utils/validationSchemas"

export const useFormManagement = () => {
	const { user } = useAuthStore()

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

	return { formData, errors, handleChange, validate, setFormData }
}
