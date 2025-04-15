// src/utils/validationSchemas.ts
import { z } from "zod"
import { Gender } from "../types/models"

// Схеми для модалки авторизації/реєстрації
// Базова схема
const baseAuthSchema = z.object({
	login: z.string().min(1, "Поле обов’язкове").email("Невірний формат email"),
	password: z
		.string()
		.min(1, "Поле обов’язкове")
		.min(7, "Необхідно мінімум 7 символів"),
	confirmPassword: z.string().optional(),
})

// Схема для реєстрації
export const authSchema = baseAuthSchema.superRefine((data, ctx) => {
	// Під час реєстрації confirmPassword обов’язковий
	if (!data.confirmPassword) {
		ctx.addIssue({
			code: z.ZodIssueCode.custom,
			message: "Поле обов’язкове",
			path: ["confirmPassword"],
		})
	} else if (data.password !== data.confirmPassword) {
		ctx.addIssue({
			code: z.ZodIssueCode.custom,
			message: "Паролі не співпадають",
			path: ["confirmPassword"],
		})
	}
})

// Схема для логінізації
export const loginSchema = baseAuthSchema.omit({ confirmPassword: true })

// Схема для перевірки заповнення особистої інформації в профілі
export const settingsSchema = z.object({
	firstName: z
		.string()
		.optional()
		.refine(val => !val || val.length >= 2, {
			message: "Ім’я повинно містити принаймні 2 символи",
		}),
	lastName: z
		.string()
		.optional()
		.refine(val => !val || val.length >= 2, {
			message: "Прізвище повинно містити принаймні 2 символи",
		}),
	phoneNumber: z
		.string()
		.optional()
		.refine(val => !val || /^\+380\d{9}$/.test(val), {
			message: "Номер телефону має бути у форматі +380XXXXXXXXX",
		}),
	email: z.string().email("Невірний формат email"),
	dateOfBirth: z
		.string()
		.optional()
		.refine(
			val => {
				if (!val) return true
				const [year, month, day] = val.split("-").map(Number)
				const parsedDate = new Date(year, month - 1, day)
				return !isNaN(parsedDate.getTime()) && parsedDate < new Date()
			},
			{ message: "Дата народження має бути в минулому" },
		),
	gender: z
		.string()
		.refine(
			val =>
				!val ||
				[Gender.male, Gender.female, Gender.other].includes(val as Gender),
			{
				message: "Невірне значення для статі",
			},
		)
		.nullable()
		.optional() as z.ZodType<string | null | undefined>,
	avatar: z.string().optional(),
})
