// src/app/api/client.ts

import { User } from "@/types/models"

// Авторизація через email/пароль
export const loginWithEmail = async (
	email: string,
	password: string,
	isRegister: boolean,
): Promise<User> => {
	const response = await fetch("/api/auth/email", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password, isRegister }),
	})

	if (!response.ok) {
		const error = await response.json()
		throw new Error(error.error || "Failed to authenticate with email")
	}

	return response.json()
}

// Отримання даних користувача
export const fetchUser = async (email: string): Promise<User> => {
	const response = await fetch(`/api/user?email=${email}`)

	if (!response.ok) {
		const error = await response.json()
		throw new Error(error.error || "Failed to fetch user")
	}

	return response.json()
}
