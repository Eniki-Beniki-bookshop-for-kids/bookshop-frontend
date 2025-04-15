// src/app/hooks/useGoogleSignIn.ts
"use client"

import { supabaseClient as supabase } from "@/lib/supabase/supabaseClient"
import { useToast } from "@chakra-ui/react"

export const useGoogleSignIn = () => {
	const toast = useToast()

	// Функція для входу через Google
	const login = async () => {
		const redirectTo =
			process.env.NEXT_PUBLIC_BASE_URL || window.location.origin

		const { error } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				scopes: "email profile",
				redirectTo,
				queryParams: {
					prompt: "select_account", // Завжди показувати вікно вибору акаунта
				},
			},
		})

		if (error) {
			console.error("Помилка авторизації:", error.message)
			toast({
				title: "Помилка",
				description: "Не вдалося увійти через Google. Спробуй ще раз.",
				status: "error",
				duration: 5000,
				isClosable: true,
			})
		}
	}

	return { login }
}
