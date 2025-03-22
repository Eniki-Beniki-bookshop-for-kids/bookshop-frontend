"use client"

import { Suspense } from "react"
import { GoogleAuthHandler } from "../components"

export default function Home() {
	return (
		<div className="flex justify-center text-4xl font-medium py-4 bg-customGreen">
			<Suspense fallback={null}>
				<GoogleAuthHandler />
			</Suspense>
			Main
		</div>
	)
}
