// src/app/hooks/useGoogleSignIn.ts
"use client"

import { useToast } from "@chakra-ui/react"
import { supabaseClient as supabase } from "../lib/supabase/supabaseClient"

export const useGoogleSignIn = () => {
	const toast = useToast()

	// Функція для входу через Google
	const login = async () => {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				scopes: "email profile",
				redirectTo: window.location.origin,
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
