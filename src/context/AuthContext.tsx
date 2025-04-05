// src/context/AuthContext.tsx
import { useAuthModal } from "@/hooks"
import { createContext, FC, ReactNode, useContext } from "react"
import { AuthContextType } from "../types/interfaces"

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
	children: ReactNode
	initialIsRegister: boolean
	isOpen: boolean
}

export const AuthProvider: FC<AuthProviderProps> = ({
	children,
	initialIsRegister,
	isOpen,
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
		validate,
	} = useAuthModal(initialIsRegister, isOpen)

	return (
		<AuthContext.Provider
			value={{
				isChecked,
				setIsChecked,
				formData,
				setFormData,
				errors,
				setErrors,
				isRegister,
				setIsRegister,
				validate,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuthContext = () => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error("useAuthContext must be used within an AuthProvider")
	}
	return context
}
