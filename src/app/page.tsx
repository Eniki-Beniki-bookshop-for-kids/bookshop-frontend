"use client"

import { Text } from "@chakra-ui/react"
import { Suspense } from "react"
import { GoogleAuthHandler } from "../components"

export default function Home() {
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
