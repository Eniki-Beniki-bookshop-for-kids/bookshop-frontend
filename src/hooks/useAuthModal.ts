import { useEffect, useState } from "react"
import { authCredentials } from "../types/constants"

export const useAuthModal = (initialIsRegister: boolean, isOpen: boolean) => {
	const [isChecked, setIsChecked] = useState(false)
	const [formData, setFormData] = useState(authCredentials)
	const [errors, setErrors] = useState(authCredentials)
	const [isRegister, setIsRegister] = useState(initialIsRegister)

	useEffect(() => {
		if (!isOpen) {
			setIsRegister(initialIsRegister)
			setFormData(authCredentials)
			setErrors(authCredentials)
			setIsChecked(false)
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
	}
}
