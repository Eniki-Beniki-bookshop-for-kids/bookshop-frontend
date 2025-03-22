import { User } from "@/types/models"
import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"

interface AuthState {
	user: User | null
	setUser: (user: User | null) => void
	logout: () => void
}

export const useAuthStore = create<AuthState>()(
	devtools(
		persist(
			set => ({
				user: null,
				setUser: user => {
					set({ user })
				},
				logout: () => {
					set({ user: null })
				},
			}),
			{
				name: "auth-storage",
				storage: createJSONStorage(() => localStorage),
			},
		),
		{
			name: "AuthStore",
		},
	),
)
