"use client"

import { FC } from "react"
import { ButtonTemplate } from "../../ui"

interface LoginSubmitButtonProps {
	formData: { login: string; password: string }
	setErrors: (errors: { login: string; password: string }) => void
	onSubmit: () => void
}

export const LoginSubmitButton: FC<LoginSubmitButtonProps> = ({
	formData,
	setErrors,
	onSubmit,
}) => {
	const handleSubmit = () => {
		const newErrors = { login: "", password: "" }
		let isValid = true

		if (formData.login.length < 7) {
			newErrors.login = "Ой! А треба мінімум 7 символів :)"
			isValid = false
		}
		if (formData.password.length < 7) {
			newErrors.password = "Ой! А треба мінімум 7 символів :)"
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
			Увійти
		</ButtonTemplate>
	)
}
