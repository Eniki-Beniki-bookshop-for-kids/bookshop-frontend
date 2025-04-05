"use client"

import { Text } from "@chakra-ui/react"
import { Suspense } from "react"
import { GoogleAuthHandler } from "../components"
import { useAuthStore } from "../stores/authStore"

export default function Home() {
	const { user, accessToken, refreshToken, tokenType } = useAuthStore()
	console.log({ user, accessToken, refreshToken, tokenType })

	return (
		<div className="flex justify-center text-xl font-medium py-4">
			<Suspense fallback={null}>
				<GoogleAuthHandler />
			</Suspense>
			<Text className="text-4xl font-bold text-center">
				ЦЕ ГОЛОВНА СТОРІНКА
			</Text>
		</div>
	)
}
