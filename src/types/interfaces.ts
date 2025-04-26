// src/types/interfaces.ts
import {
	BookTypes as BookTypesFromPrisma,
	Categories as CategoriesFromPrisma,
	CoverType as CoverTypeFromPrisma,
	Gender as GenderFromPrisma,
	Genre as GenreFromPrisma,
	Language as LanguageFromPrisma,
	TargetAges as TargetAgesFromPrisma,
	User as UserFromPrisma,
} from "../../prisma/generated/client"
import { authCredentials } from "./constants"
import { User } from "./models"

export type PrismaGender = GenderFromPrisma
export type PrismaUser = UserFromPrisma
export type PrismaGenre = GenreFromPrisma
export type PrismaCategories = CategoriesFromPrisma
export type PrismaTargetAges = TargetAgesFromPrisma
export type PrismaBookTypes = BookTypesFromPrisma
export type PrismaLanguage = LanguageFromPrisma
export type PrismaCoverType = CoverTypeFromPrisma

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

// Сайдбар на головні сторінці
export interface HomeSidebarMenuItem {
	label: string
	filter: Record<string, string>
	href: string
}

// визначення динамічних маршрутів
export interface DynamicRoute {
	basePath: string // Базовий шлях (наприклад, "/catalog")
	segmentIndex: number // Індекс сегменту, який є динамічним (наприклад, 1 для "/catalog/[filter]")
	getLabel: (segment: string) => string // Функція для отримання label для динамічного сегменту
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
	isDisabled?: boolean
}

// Тип фільтрів книг для клієнтських параметрів
export interface FilterBookParams {
	status?: string
	title?: string
	author?: string
	genre?: string
	categories?: string[]
	targetAges?: string[]
	series?: string
	publisher?: string
	publicationYear?: string
	bookType?: string[]
	originalLanguage?: string
	coverType?: string
	priceMin?: string
	priceMax?: string
	page: number
	limit: number
	sortField?: string
	sortOrder?: "asc" | "desc"
}

// Тип для серверних критеріїв
export interface ServerFilterBookCriteria {
	status?: string
	title?: string
	author?: string
	genre?: PrismaGenre
	categories?: PrismaCategories[]
	targetAges?: PrismaTargetAges[]
	series?: string
	publisher?: string
	publicationYear?: number
	bookType?: PrismaBookTypes[]
	originalLanguage?: PrismaLanguage
	coverType?: PrismaCoverType
	priceMin?: number
	priceMax?: number
}
