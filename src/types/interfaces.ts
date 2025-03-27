import { authCredentials } from "./constants"

export type AuthCredentials = typeof authCredentials

export interface AuthErrors {
	login?: string
	password?: string
	confirmPassword?: string
	authError?: string
}

export interface AuthContextType {
	isChecked: boolean
	setIsChecked: (value: boolean) => void
	formData: AuthCredentials
	setFormData: (formData: AuthCredentials) => void
	errors: AuthErrors
	setErrors: (errors: AuthErrors) => void
	isRegister: boolean
	setIsRegister: (value: boolean) => void
	validate: () => { errors: AuthErrors; isValid: boolean }
}
