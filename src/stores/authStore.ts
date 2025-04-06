// src/stores/authStore.ts
import { User } from "@/types/models"
import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"

interface AuthState {
	user: User | null
	accessToken: string | null
	refreshToken: string | null
	tokenType: string | null
	isLoading: boolean
	setUser: (user: User | null) => void
	setTokens: (
		accessToken: string,
		refreshToken: string,
		tokenType: string,
	) => void
	logout: () => void
}

export const useAuthStore = create<AuthState>()(
	devtools(
		persist(
			set => ({
				user: null,
				accessToken: null,
				refreshToken: null,
				tokenType: null,
				isLoading: true,
				setUser: user =>
					set(state => {
						return { ...state, user }
					}),
				setTokens: (accessToken, refreshToken, tokenType) =>
					set(state => {
						return { ...state, accessToken, refreshToken, tokenType }
					}),
				logout: () =>
					set(() => {
						return {
							user: null,
							accessToken: null,
							refreshToken: null,
							tokenType: null,
						}
					}),
			}),
			{
				name: "auth-storage",
				storage: createJSONStorage(() => localStorage),
				onRehydrateStorage: () => state => {
					// Після завантаження даних із localStorage встановлюємо isLoading у false
					if (state) {
						state.isLoading = false
					}
				},
			},
		),
		{
			name: "AuthStore",
		},
	),
)
