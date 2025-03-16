import { useAuthModal } from "@/hooks"
import { createContext, FC, ReactNode, useContext } from "react"
import { authCredentials } from "../types/constants"

interface AuthContextType {
	isChecked: boolean
	setIsChecked: (value: boolean) => void
	formData: typeof authCredentials
	setFormData: (formData: typeof authCredentials) => void
	errors: typeof authCredentials
	setErrors: (errors: typeof authCredentials) => void
	isRegister: boolean
	setIsRegister: (value: boolean) => void
}

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
