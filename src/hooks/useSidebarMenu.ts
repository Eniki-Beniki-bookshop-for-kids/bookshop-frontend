// src/hooks/useSidebarMenu.ts
"use client"

import { logout } from "@/app/api/client"
import { useAuthStore } from "@/stores/authStore"
import { useToast } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const useSidebarMenu = (initialSection: string = "settings") => {
	const [activeSection, setActiveSection] = useState(initialSection)
	const router = useRouter()
	const toast = useToast()
	const { accessToken, tokenType, logout: logoutFromStore } = useAuthStore()

	const handleMenuClick = async (id: string) => {
		if (id === "logout") {
			try {
				// Перевіряємо наявність токенів
				if (!accessToken || !tokenType) {
					throw new Error("No access token or token type available")
				}

				// Викликаємо logout на бекенді
				await logout(accessToken, tokenType)

				// Якщо logout успішний, очищаємо authStore і перенаправляємо
				logoutFromStore()
				router.push("/")
				toast({
					title: "Успішний вихід",
					description: "Ви успішно вийшли з акаунта.",
					status: "success",
					duration: 3000,
					isClosable: true,
				})
			} catch (error) {
				console.error(
					"Error during logout:",
					error instanceof Error ? error.message : error,
				)
				toast({
					title: "Помилка",
					description: "Не вдалося вийти. Спробуйте ще раз.",
					status: "error",
					duration: 5000,
					isClosable: true,
				})
			}
		}

		if (id !== "logout") setActiveSection(id)
	}

	return {
		activeSection,
		handleMenuClick,
	}
}
