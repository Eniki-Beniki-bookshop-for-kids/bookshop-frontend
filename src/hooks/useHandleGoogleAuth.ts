"use client"

import { useAuthStore } from "@/stores/authStore"
import { UserRole } from "@/types/models"
import { useQueryClient } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

export const useHandleGoogleAuth = () => {
	const searchParams = useSearchParams()
	const queryClient = useQueryClient()
	const setUser = useAuthStore(state => state.setUser)
	const user = useAuthStore(state => state.user)

	useEffect(() => {
		// Якщо користувач уже авторизований, не виконуємо дії
		if (user) return

		const googleId = searchParams.get("google_id")
		const email = searchParams.get("email")

		if (!googleId || !email) return

		const userData = {
			userId: 0,
			email,
			password: null,
			firstName: searchParams.get("first_name") || "",
			lastName: searchParams.get("last_name") || "",
			phoneNumber: undefined,
			dateOfBirth: undefined,
			address: undefined,
			city: undefined,
			postalCode: undefined,
			country: undefined,
			role: UserRole.User,
			googleId,
			googleAccessToken: searchParams.get("access_token") || "",
			avatar: searchParams.get("photo_url") || undefined,
			isActive: true,
			favoriteBooks: [],
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		}

		setUser(userData)
		queryClient.setQueryData(["user", userData.email], userData)

		// Очищаємо query-параметри з URL
		window.history.replaceState({}, document.title, "/")
	}, [searchParams, setUser, queryClient, user])
}
