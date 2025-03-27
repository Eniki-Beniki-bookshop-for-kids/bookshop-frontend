import { useAuthStore } from "@/stores/authStore"
import { useState } from "react"
import { Gender } from "../types/models"
import { validateForm } from "../utils"
import { settingsSchema } from "../utils/validationSchemas"

type FormData = {
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
		setFormData(prev => ({
			...prev,
			[field]: value,
		}))
	}

	const validate = () => {
		const { errors: validationErrors, isValid } = validateForm(
			settingsSchema,
			formData,
		)
		setErrors(validationErrors)
		return isValid
	}

	const handleSubmit = () => {
		if (!user) return

		if (validate()) {
			setUser({ ...user, ...formData })
		} else {
			console.log("Помилки валідації:", errors)
		}
	}

	return {
		formData,
		errors,
		handleChange,
		handleSubmit,
	}
}
