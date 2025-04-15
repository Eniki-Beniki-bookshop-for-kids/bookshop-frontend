//src/app/page.tsx
"use client"

import { useAuthCheck } from "@/hooks"
import { Text } from "@chakra-ui/react"

export default function Home() {
	useAuthCheck()

	return (
		<div className="flex justify-center text-xl font-medium py-4">
			<Text className="text-4xl font-bold text-center">
				ЦЕ ГОЛОВНА СТОРІНКА
			</Text>
		</div>
	)
}
