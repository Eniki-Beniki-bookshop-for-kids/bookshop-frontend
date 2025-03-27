// src/utils/validationUtils.ts
import { z, ZodError } from "zod"

export const validateForm = <T extends z.ZodTypeAny>(
	schema: T,
	data: z.infer<T>,
): { errors: Partial<Record<keyof z.infer<T>, string>>; isValid: boolean } => {
	try {
		schema.parse(data)
		return { errors: {}, isValid: true }
	} catch (error) {
		if (error instanceof ZodError) {
			const errors = error.errors.reduce((acc, err) => {
				const field = err.path[0] as keyof z.infer<T>
				acc[field] = err.message
				return acc
			}, {} as Partial<Record<keyof z.infer<T>, string>>)
			return { errors, isValid: false }
		}
		return { errors: {}, isValid: false }
	}
}
