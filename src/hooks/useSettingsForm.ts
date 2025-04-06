// scr/hooks/useSettingsForm.ts
"use client"

import { useFormManagement, useUpdateAvatar, useUpdateUser } from "."

export const useSettingsForm = () => {
	const { formData, errors, handleChange, validate, setFormData } =
		useFormManagement()
	const { handleSubmit, isUserUpdating, serverError, setServerError } =
		useUpdateUser({
			formData,
			validate,
		})
	const { handleAvatarChange, isAvatarUpdating } = useUpdateAvatar({
		setFormData,
		setServerError,
	})

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
