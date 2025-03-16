"use client"

import { AuthModalBodyProps } from "@/types/propsInterfaces"
import { ModalBody } from "@chakra-ui/react"
import { FC } from "react"
import { InputTemplate } from "../../ui"
import { AuthFormActions } from "./AuthFormActions"
import { AuthSubmitButton } from "./AuthSubmitButton"

export const AuthModalBody: FC<AuthModalBodyProps> = ({
	isChecked,
	setIsChecked,
	formData,
	setFormData,
	errors,
	setErrors,
	isRegister,
	onClose,
}) => {
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
			<AuthFormActions
				isChecked={isChecked}
				onCheckboxChange={checked => {
					console.log("Checked:", checked)
					setIsChecked(checked)
				}}
				onForgotPasswordClick={() => console.log("Go to change a password")}
				isRegister={isRegister}
			/>
			<AuthSubmitButton
				formData={formData}
				setErrors={setErrors}
				onSubmit={onClose}
				isRegister={isRegister}
			/>
		</ModalBody>
	)
}
