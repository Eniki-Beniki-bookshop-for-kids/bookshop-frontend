// src/hooks/useAuthRefresh.ts
"use client"

import { useAuthStore } from "@/stores/authStore"
import axios, { AxiosError } from "axios"

export const useAuthRefresh = () => {
	const { refreshToken, setTokens, logout } = useAuthStore()

	const refreshAccessToken = async () => {
		if (!refreshToken) {
			throw new Error("No refresh token available")
		}

		try {
			const response = await axios.post("/api/auth/refresh", { refreshToken })
			const {
				accessToken: newAccessToken,
				refreshToken: newRefreshToken,
				tokenType: newTokenType,
			} = response.data
			setTokens(newAccessToken, newRefreshToken, newTokenType)
			return newAccessToken
		} catch (error) {
			const axiosError = error as AxiosError
			if (axiosError.response?.status === 401) {
				// Refresh token протух
				logout()
				throw new Error("Session expired. Please log in again.")
			}
			throw error
		}
	}

	return { refreshAccessToken }
}
