// src/context/ModalContext.tsx
"use client"

import { createContext, FC, ReactNode, useContext, useState } from "react"
import { Book } from "../types/models"

interface ModalOptions {
	book?: Book
	[key: string]: any
}

interface ModalContextType {
	openModal: (modalType: string, options?: ModalOptions) => void
	closeModal: () => void
	currentModal: string | null
	modalOptions?: ModalOptions
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [currentModal, setCurrentModal] = useState<string | null>(null)
	const [modalOptions, setModalOptions] = useState<ModalOptions | undefined>(
		undefined,
	)

	const openModal = (modalType: string, options?: ModalOptions) => {
		setCurrentModal(modalType)
		setModalOptions(options)
	}

	const closeModal = () => {
		setCurrentModal(null)
		setModalOptions(undefined)
	}

	return (
		<ModalContext.Provider
			value={{ openModal, closeModal, currentModal, modalOptions }}
		>
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
