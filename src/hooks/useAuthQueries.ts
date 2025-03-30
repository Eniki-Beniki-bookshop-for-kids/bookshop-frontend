"use client"

import { fetchUser, loginWithEmail } from "@/app/api/client"
import { useAuthStore } from "@/stores/authStore"
import { User } from "@/types/models"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"

// Хук для авторизації через email/пароль
export const useEmailLoginMutation = () => {
	const queryClient = useQueryClient()
	const { setUser } = useAuthStore()

	return useMutation({
		mutationFn: ({
			email,
			password,
			isRegister,
		}: {
			email: string
			password: string
			isRegister: boolean
		}) => loginWithEmail(email, password, isRegister),
		onSuccess: (user: User) => {
			setUser(user)
			queryClient.setQueryData(["user", user.email], user)
		},
		onError: (error: Error) => {
			console.error("Email login error:", error.message)
		},
	})
}

// Хук для отримання даних користувача
export const useUserQuery = (email: string | null) => {
	const setUser = useAuthStore(state => state.setUser)

	const query = useQuery({
		queryKey: ["user", email],
		queryFn: () => fetchUser(email!),
		enabled: !!email, // тільки якщо email існує
	})

	// для обробки успішного запиту
	useEffect(() => {
		if (query.isSuccess && query.data) {
			setUser(query.data)
		}
	}, [query.isSuccess, query.data, setUser])

	// для обробки помилки
	useEffect(() => {
		if (query.isError && query.error) {
			console.error("Fetch user error:", query.error.message)
		}
	}, [query.isError, query.error])

	return query
}
