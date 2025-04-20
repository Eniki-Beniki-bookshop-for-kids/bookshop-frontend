// src/components/DevToolsInitializer.tsx
"use client"

import { useAuthStore } from "@/stores/authStore"
import { useBookStore } from "@/stores/bookStore"
import { mountStoreDevtool } from "simple-zustand-devtools"

if (process.env.NODE_ENV === "development") {
	mountStoreDevtool("BookStore", useBookStore)
	mountStoreDevtool("AuthStore", useAuthStore)
}

const DevToolsInitializer = () => {
	return null
}

export default DevToolsInitializer
