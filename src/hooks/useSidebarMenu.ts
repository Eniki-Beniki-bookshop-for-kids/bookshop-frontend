// src/hooks/useSidebarMenu.ts
"use client"

import { supabaseClient as supabase } from "@/lib/supabase/supabaseClient"
import { useAuthStore } from "@/stores/authStore"
import { useToast } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const useSidebarMenu = (initialSection: string = "settings") => {
	const [activeSection, setActiveSection] = useState(initialSection)
	const router = useRouter()
	const toast = useToast()
	const { logout: logoutFromStore } = useAuthStore()

	const handleMenuClick = async (id: string) => {
		if (id === "logout") {
			try {
				// Завершуємо сесію Supabase на клієнті
				const { error } = await supabase.auth.signOut()
				if (error) throw error

				// Очищаємо кастомні токени
				logoutFromStore()
				const projectId = process.env.SUPABASE_PROJECT_ID
				localStorage.removeItem(`sb-${projectId}-auth-token`)

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
