//src/hooks/useSearchManagement.ts
"use client"

import { useState } from "react"
import { searchSchema } from "@/utils/validationSchemas"
import { validateForm } from "../utils"

interface SearchFormData {
	search: string
}

export const useSearchManagement = () => {
	const [query, setQuery] = useState<string>("")
	const [errors, setErrors] = useState<
		Partial<Record<keyof SearchFormData, string>>
	>({})

	const validate = () => {
		const { errors: validationErrors, isValid } = validateForm(searchSchema, {
			search: query,
		})
		setErrors(validationErrors)
		return { isValid, validationErrors }
	}

	const handleSearch = (value: string) => {
		setQuery(value)
		// Очищаємо помилки при зміні значення
		if (errors.search) {
			setErrors(prev => ({ ...prev, search: undefined }))
		}
	}

	const handleSearchSubmit = () => {
		const { isValid } = validate()
		if (isValid) {
			return query // Повертаємо query для подальшого використання
		}
		return null
	}

	return { query, errors, handleSearch, handleSearchSubmit, setQuery }
}
