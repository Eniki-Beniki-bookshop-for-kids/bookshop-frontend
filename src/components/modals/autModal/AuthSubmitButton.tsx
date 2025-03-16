"use client"

import { useAuthContext } from "@/context/AuthContext"
import { validateAuthForm } from "@/utils"
import { FC } from "react"
import { ButtonTemplate } from "../../ui"

export const AuthSubmitButton: FC<{ onSubmit: () => void }> = ({
	onSubmit,
}) => {
	const { formData, setErrors, isRegister } = useAuthContext()

	const handleSubmit = () => {
		const { errors, isValid } = validateAuthForm(formData, isRegister)

		setErrors(errors)

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
