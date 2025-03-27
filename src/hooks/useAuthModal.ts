import { useEffect, useState } from "react"
import { authCredentials } from "../types/constants"
import { AuthCredentials, AuthErrors } from "../types/interfaces"
import { validateForm } from "../utils"
import { authSchema, loginSchema } from "../utils/validationSchemas"

export const useAuthModal = (initialIsRegister: boolean, isOpen: boolean) => {
	const [isChecked, setIsChecked] = useState(false)
	const [formData, setFormData] = useState<AuthCredentials>(authCredentials)
	const [errors, setErrors] = useState<AuthErrors>({})
	const [isRegister, setIsRegister] = useState(initialIsRegister)

	// Валідація форми
	const validate = () => {
		const schema = isRegister ? authSchema : loginSchema
		return validateForm(schema, formData)
	}

	// Скидаємо форму при закритті модалки
	useEffect(() => {
		if (!isOpen) {
			setFormData(authCredentials)
			setErrors({})
			setIsChecked(false)
			setIsRegister(initialIsRegister)
		}
	}, [isOpen, initialIsRegister])

	return {
		isChecked,
		setIsChecked,
		formData,
		setFormData,
		errors,
		setErrors,
		isRegister,
		setIsRegister,
		validate,
	}
}
