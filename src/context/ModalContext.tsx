"use client"

import { createContext, FC, ReactNode, useContext, useState } from "react"

interface ModalContextType {
	openModal: (modalType: string) => void
	closeModal: () => void
	currentModal: string | null
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [currentModal, setCurrentModal] = useState<string | null>(null)

	const openModal = (modalType: string) => setCurrentModal(modalType)
	const closeModal = () => setCurrentModal(null)

	return (
		<ModalContext.Provider value={{ openModal, closeModal, currentModal }}>
			{children}
		</ModalContext.Provider>
	)
}

export const useModal = () => {
	const context = useContext(ModalContext)
	if (!context)
		throw new Error("useModal hook must be used within a ModalProvider")
	return context
}
