//src/components/modals/autModal/AuthSubmitButton.tsx
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

		const updatedErrors = { ...errors, authError: undefined }
		setErrors(updatedErrors)
		setErrors(updatedErrors)

		if (isValid) {
			loginWithEmail(
				{
					email: formData.login,
					password: formData.password,
					isRegister,
				},
				{
					onSuccess: () => onSubmit(),
					onError: (error: unknown) => {
						const errorMessage =
							error instanceof Error ? error.message : String(error)
						console.error("Auth submit error:", errorMessage)
						setErrors({ ...updatedErrors, authError: errorMessage })
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
