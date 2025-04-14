// src/app/hooks/useAuthCheck.ts
"use client"

import { supabaseClient as supabase } from "@/lib/supabase/supabaseClient"
import { useAuthStore } from "@/stores/authStore"
import { useToast } from "@chakra-ui/react"
import { useEffect } from "react"

export const useAuthCheck = () => {
	const toast = useToast()
	const { setUser, setTokens } = useAuthStore()

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const { data: sessionData, error: sessionError } =
					await supabase.auth.getSession()
				if (sessionError) throw sessionError

				if (sessionData.session) {
					const { user } = sessionData.session

					// Відправляємо користувача в API-роут для збереження
					const response = await fetch("/api/user/save", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ user }),
					})

					if (!response.ok) {
						throw new Error("Не вдалося зберегти користувача")
					}

					const {
						user: savedUser,
						accessToken,
						refreshToken,
						tokenType,
					} = await response.json()

					setUser(savedUser)
					setTokens(accessToken, refreshToken, tokenType)

					toast({
						title: "Успіх",
						description: "Ви успішно увійшли через Google!",
						status: "success",
						duration: 5000,
						isClosable: true,
					})
				}
			} catch (error) {
				console.error(
					"Помилка авторизації:",
					error instanceof Error ? error.message : "Unknown error",
				)
				toast({
					title: "Помилка",
					description: "Щось пішло не так. Спробуй ще раз.",
					status: "error",
					duration: 5000,
					isClosable: true,
				})
			}
		}

		checkAuth()
	}, [toast, setUser, setTokens])
}
