"use client"

import { useAuthContext } from "@/context/AuthContext"
import { useEmailLoginMutation } from "@/hooks"
import { FC } from "react"
import { ButtonTemplate } from "../../ui"

export const AuthSubmitButton: FC<{ onSubmit: () => void }> = ({
	onSubmit,
}) => {
	const { formData, setErrors, isRegister, validate } = useAuthContext()
	const { mutate: loginWithEmail, isPending } = useEmailLoginMutation()

	const handleSubmit = () => {
		const { errors, isValid } = validate()

		setErrors(errors)

		if (isValid) {
			loginWithEmail(
				{
					email: formData.login,
					password: formData.password,
					isRegister,
				},
				{
					onSuccess: () => onSubmit(),
					onError: (error: Error) => {
						setErrors({ ...errors, authError: error.message })
					},
				},
			)
		}
	}

	return (
		<ButtonTemplate
			width="100%"
			padding="18px"
			fontSize="18px"
			hoverScale={1.02}
			onClick={handleSubmit}
			isLoading={isPending}
			isDisabled={isPending}
		>
			{isRegister ? "Зареєструватись" : "Увійти"}
		</ButtonTemplate>
	)
}
