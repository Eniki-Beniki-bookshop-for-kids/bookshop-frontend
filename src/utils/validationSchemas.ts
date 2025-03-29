// src/utils/validationSchemas.ts
import { z } from "zod"
import { Gender } from "../types/models"

// Схеми для модалки авторизації/реєстрації
// Базова схема
const baseAuthSchema = z.object({
	login: z.string().email("Невірний формат email"),
	password: z.string().min(7, "Необхідно мінімум 7 символів"),
	confirmPassword: z.string().optional(),
})
// Схема для реєстрації
export const authSchema = baseAuthSchema.superRefine((data, ctx) => {
	if (data.confirmPassword && data.password !== data.confirmPassword) {
		ctx.addIssue({
			code: z.ZodIssueCode.custom,
			message: "Паролі не співпадають",
			path: ["confirmPassword"],
		})
	}
})
// Схема для логінізації
export const loginSchema = baseAuthSchema.omit({ confirmPassword: true })

// Схема для особистої інформації в профілі
export const settingsSchema = z.object({
	firstName: z.string().min(2, "Ім’я повинно містити принаймні 2 символи"),
	lastName: z.string().min(2, "Прізвище повинно містити принаймні 2 символи"),
	phoneNumber: z
		.string()
		.regex(/^\+380\d{9}$/, "Номер телефону має бути у форматі +380XXXXXXXXX"),
	email: z.string().email("Невірний формат email"),
	dateOfBirth: z.string().refine(
		date => {
			const [year, month, day] = date.split("-").map(Number)
			const parsedDate = new Date(year, month - 1, day)
			return !isNaN(parsedDate.getTime()) && parsedDate < new Date()
		},
		{ message: "Дата народження має бути в минулому" },
	),
	gender: z.nativeEnum(Gender),
	avatar: z.string().optional(),
})
