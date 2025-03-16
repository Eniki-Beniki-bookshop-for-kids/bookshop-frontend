"use client"

import { AuthProvider } from "@/context/AuthContext"
import { ModalTemplateProps } from "@/types/propsInterfaces"
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react"
import { FC } from "react"
import { AuthHeader, AuthModalBody, SocialAuthFooter } from "."

export const AuthModal: FC<ModalTemplateProps> = ({
	isOpen,
	onClose,
	isRegister: initialIsRegister = false,
}) => {
	const motionProps = {
		initial: { opacity: 0, y: -50 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 50 },
		transition: { duration: 0.3 },
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
				<AuthProvider initialIsRegister={initialIsRegister} isOpen={isOpen}>
					<AuthHeader onClose={onClose} />
					<AuthModalBody
						onClose={onClose}
						onForgotPasswordClick={() => console.log("Go to change a password")}
					/>
					<SocialAuthFooter onClose={onClose} />
				</AuthProvider>
			</ModalContent>
		</Modal>
	)
}
