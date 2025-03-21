"use client"

import { useAuthStore } from "@/stores/authStore"
import { useQueryClient } from "@tanstack/react-query"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { UserRole } from "../types/models"

export const useGoogleSignIn = ({ onClose }: { onClose: () => void }) => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const queryClient = useQueryClient()
	const setUser = useAuthStore(state => state.setUser)

	const login = () => {
		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
		const redirectUri = `${baseUrl}/api/auth/google/callback`
		const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

		if (!clientId) {
			throw new Error("Google Client ID is not defined")
		}

		const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=profile email`
		window.location.href = googleAuthUrl
	}

	useEffect(() => {
		const googleId = searchParams.get("google_id")
		if (googleId) {
			const userData = {
				userId: 0, // Буде заповнено бекендом
				email: searchParams.get("email") || "",
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
			onClose()
			router.replace("/", { scroll: false })
		}
	}, [searchParams, onClose, router, setUser, queryClient])

	return { login }
}
