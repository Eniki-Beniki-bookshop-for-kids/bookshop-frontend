"use client"

import { FC } from "react"
import { ButtonTemplate } from "../../ui"

interface AuthSubmitButtonProps {
	formData: { login: string; password: string; confirmPassword: string }
	setErrors: (errors: {
		login: string
		password: string
		confirmPassword: string
	}) => void
	onSubmit: () => void
	isRegister?: boolean
}

export const AuthSubmitButton: FC<AuthSubmitButtonProps> = ({
	formData,
	setErrors,
	onSubmit,
	isRegister = false,
}) => {
	const handleSubmit = () => {
		const newErrors = { login: "", password: "", confirmPassword: "" }
		let isValid = true

		if (formData.login.length < 7) {
			newErrors.login = "Ой! А треба мінімум 7 символів :)"
			isValid = false
		}

		if (formData.password.length < 7) {
			newErrors.password = "Ой! А треба мінімум 7 символів :)"
			isValid = false
		}

		if (isRegister && formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = "Паролі не співпадають :)"
			isValid = false
		}

		setErrors(newErrors)

		if (isValid) {
			console.log("Дані форми:", formData)
			onSubmit()
		}
	}

	return (
		<ButtonTemplate
			width="100%"
			padding="18px"
			fontSize="18px"
			hoverScale={1.02}
			onClick={handleSubmit}
		>
			{isRegister ? "Зареєструватись" : "Увійти"}
		</ButtonTemplate>
	)
}
