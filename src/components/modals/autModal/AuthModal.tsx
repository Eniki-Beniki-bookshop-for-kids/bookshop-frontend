"use client"

import { useAuthModal } from "@/hooks"
import { authCredentials } from "@/types/constants"
import { ModalTemplateProps } from "@/types/propsInterfaces"
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react"
import { FC } from "react"
import { AuthHeader, AuthModalBody, SocialAuthFooter } from "."

export const AuthModal: FC<ModalTemplateProps> = ({
	isOpen,
	onClose,
	isRegister: initialIsRegister = false,
}) => {
	const {
		isChecked,
		setIsChecked,
		formData,
		setFormData,
		errors,
		setErrors,
		isRegister,
		setIsRegister,
	} = useAuthModal(initialIsRegister, isOpen)

	const motionProps = {
		initial: { opacity: 0, y: -50 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 50 },
		transition: { duration: 0.3 },
	}

	const handleSwitchToRegister = () => {
		setIsRegister(true)
		setFormData(authCredentials)
		setErrors(authCredentials)
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay backdropFilter="blur(10px)" />
			<ModalContent
				p="50px"
				borderRadius="30px"
				position="relative"
				width={{ base: "90%", md: "624px" }}
				maxWidth="624px"
				motionProps={motionProps}
			>
				<AuthHeader
					title={isRegister ? "Реєстрація" : "Вхід / Реєстрація"}
					onClose={onClose}
				/>
				<AuthModalBody
					isChecked={isChecked}
					setIsChecked={setIsChecked}
					formData={formData}
					setFormData={setFormData}
					errors={errors}
					setErrors={setErrors}
					isRegister={isRegister}
					onClose={onClose}
				/>
				<SocialAuthFooter
					onClick={
						isRegister ? () => setIsRegister(false) : handleSwitchToRegister
					}
					setIsRegister={setIsRegister}
					isRegister={isRegister}
				/>
			</ModalContent>
		</Modal>
	)
}
