"use client"

import { useAuthContext } from "@/context/AuthContext"
import { ModalBody, Text } from "@chakra-ui/react"
import { FC } from "react"
import { AuthFormActions, AuthSubmitButton } from "."
import { InputTemplate } from "../../ui"

interface AuthModalBodyProps {
	onClose: () => void
	onForgotPasswordClick: () => void
}

export const AuthModalBody: FC<AuthModalBodyProps> = ({
	onClose,
	onForgotPasswordClick,
}) => {
	const { formData, setFormData, errors, isRegister } = useAuthContext()
	// const user = useAuthStore(state => state.user)
	// console.log("Користувач у store:", user)

	return (
		<ModalBody p={0} mb={6}>
			<InputTemplate
				type="text"
				placeholder="Номер телефону або e-mail"
				value={formData.login}
				onChange={e => setFormData({ ...formData, login: e.target.value })}
				error={errors.login}
			/>
			<InputTemplate
				type="password"
				placeholder="Пароль"
				value={formData.password}
				onChange={e => setFormData({ ...formData, password: e.target.value })}
				error={errors.password}
				mt={8}
			/>
			{isRegister && (
				<InputTemplate
					type="password"
					placeholder="Підтвердити пароль"
					value={formData.confirmPassword}
					onChange={e =>
						setFormData({ ...formData, confirmPassword: e.target.value })
					}
					error={errors.confirmPassword}
					mt={8}
				/>
			)}
			{errors.authError && (
				<Text color="red.500" fontSize="sm" mt={4}>
					{errors.authError}
				</Text>
			)}
			<AuthFormActions onForgotPasswordClick={onForgotPasswordClick} />
			<AuthSubmitButton onSubmit={onClose} />
		</ModalBody>
	)
}
