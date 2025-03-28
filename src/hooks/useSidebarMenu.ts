"use client"

import { useAuthStore } from "@/stores/authStore"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const useSidebarMenu = (initialSection: string = "settings") => {
	const [activeSection, setActiveSection] = useState(initialSection)
	const router = useRouter()

	const handleMenuClick = (id: string) => {
		if (id === "logout") {
			useAuthStore.getState().logout()
			router.push("/")
		} else {
			setActiveSection(id)
		}
	}

	return {
		activeSection,
		handleMenuClick,
	}
}
