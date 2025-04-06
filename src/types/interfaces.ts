// src/types/interfaces.ts
import { authCredentials } from "./constants"
import { User } from "./models"

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

export interface AuthResponse {
	accessToken: string
	refreshToken: string
	tokenType: string
	user: User
}

export interface ApiErrorResponse {
	message: string
}

export interface AccountFormData {
	firstName: string
	lastName: string
	phoneNumber: string
	email: string
	dateOfBirth: string
	gender?: string | null
	avatar?: string
}

export interface AccountSettingField {
	type: string
	placeholder: string
	field: keyof AccountFormData
}
