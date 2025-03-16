"use client"

import { AuthModal, CartModal } from "../components/modals"
import { useModal } from "../context/ModalContext"

export const AppModals = () => {
	const { currentModal, closeModal } = useModal()

	return (
		<>
			{currentModal === "login" && (
				<AuthModal isOpen={true} onClose={closeModal} isRegister={false} />
			)}
			{currentModal === "cart" && (
				<CartModal isOpen={true} onClose={closeModal} />
			)}
		</>
	)
}
