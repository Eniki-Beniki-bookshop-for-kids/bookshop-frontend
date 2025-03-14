"use client"

import { CartModal, LoginModal } from "../components/modals"
import { useModal } from "../context/ModalContext"

export const AppModals = () => {
	const { currentModal, closeModal } = useModal()

	return (
		<>
			{currentModal === "login" && (
				<LoginModal isOpen={true} onClose={closeModal} />
			)}
			{currentModal === "cart" && (
				<CartModal isOpen={true} onClose={closeModal} />
			)}
		</>
	)
}
