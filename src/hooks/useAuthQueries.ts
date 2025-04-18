// src/hooks/useAuthQueries.ts
"use client"

import { authWithEmail, fetchUser } from "@/app/api/userClient"
import { useAuthStore } from "@/stores/authStore"
import { useToast } from "@chakra-ui/react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"
import { ApiErrorResponse, AuthResponse } from "../types/interfaces"

// Хук для авторизації через email/пароль
export const useEmailLoginMutation = () => {
	const queryClient = useQueryClient()
	const { setUser, setTokens } = useAuthStore()
	const toast = useToast()

	return useMutation({
		mutationFn: ({
			email,
			password,
			isRegister,
		}: {
			email: string
			password: string
			isRegister: boolean
		}) => authWithEmail(email, password, isRegister ? "signup" : "login"),
		onSuccess: (data: AuthResponse | ApiErrorResponse) => {
			// Перевіряємо статус відповіді
			if ("user" in data) {
				// Успішна авторизація
				const { user, accessToken, refreshToken, tokenType } = data
				setUser(user)
				setTokens(accessToken, refreshToken, tokenType)
				queryClient.setQueryData(["user", user.email], user)
			} else {
				// Статус 400/401 (наприклад, "Invalid credentials")
				console.error("Authentication failed:", data.message)
				toast({
					title: "Помилка",
					description: "Не вдалося авторизуватись. Спробуйте ще раз.",
					status: "error",
					duration: 5000,
					isClosable: true,
				})
				throw new Error(data.message || "Authentication failed")
			}
		},
		onError: (error: Error) => {
			console.error("Email auth error:", error.message)
			toast({
				title: "Помилка",
				description: "Не вдалося авторизуватись. Спробуйте ще раз.",
				status: "error",
				duration: 5000,
				isClosable: true,
			})
		},
	})
}

// Хук для отримання даних користувача
export const useUserQuery = () => {
	const { user, accessToken, tokenType, setUser } = useAuthStore()

	const query = useQuery({
		queryKey: ["user", user?.email],
		queryFn: () => {
			if (!accessToken || !tokenType) {
				throw new Error("No access token or token type available")
			}
			return fetchUser(accessToken, tokenType)
		},
		enabled: !!user?.email && !!accessToken && !!tokenType, // Запит тільки якщо є email, accessToken і tokenType
	})

	useEffect(() => {
		const { isSuccess, data, isError, error } = query
		if (isSuccess && data) {
			// Оновлюємо user тільки якщо він змінився
			if (JSON.stringify(user) !== JSON.stringify(data)) {
				setUser(data)
			}
		}

		if (isError && error) {
			const errorMessage =
				error instanceof Error ? error.message : String(error)
			console.error("Fetch user error:", errorMessage)
		}
	}, [query, setUser, user])

	return query
}
