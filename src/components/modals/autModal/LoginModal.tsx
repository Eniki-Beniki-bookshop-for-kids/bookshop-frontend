"use client"

import { ModalTemplateProps } from "@/types/propsInterfaces"
import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react"
import { FC, useState } from "react"
import { InputTemplate } from "../../ui"
import { AuthFormActions } from "./AuthFormActions"
import { AuthHeader } from "./AuthHeader"
import { LoginSubmitButton } from "./LoginSubmitButton"
import { SocialAuthFooter } from "./SocialAuthFooter"

export const LoginModal: FC<ModalTemplateProps> = ({ isOpen, onClose }) => {
	const [isChecked, setIsChecked] = useState(false)
	const [formData, setFormData] = useState({
		login: "",
		password: "",
	})
	const [errors, setErrors] = useState({
		login: "",
		password: "",
	})

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay backdropFilter="blur(10px)" />
			<ModalContent
				p="50px"
				borderRadius="30px"
				position="relative"
				width={{ base: "90%", md: "624px" }}
				maxWidth="624px"
			>
				<AuthHeader title="Вхід / Реєстрація" onClose={onClose} />
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
						onChange={e =>
							setFormData({ ...formData, password: e.target.value })
						}
						error={errors.password}
						mt={8}
					/>
					<AuthFormActions
						isChecked={isChecked}
						onCheckboxChange={checked => {
							console.log("Checked:", checked)
							setIsChecked(checked)
						}}
						onForgotPasswordClick={() => console.log("Go to registration")}
					/>
					<LoginSubmitButton
						formData={formData}
						setErrors={setErrors}
						onSubmit={onClose}
					/>
				</ModalBody>
				<SocialAuthFooter onSwitch={onClose} />
			</ModalContent>
		</Modal>
	)
}
