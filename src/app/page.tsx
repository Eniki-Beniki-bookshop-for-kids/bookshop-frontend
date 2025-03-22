"use client"

import { useHandleGoogleAuth } from "@/hooks"

export default function Home() {
	useHandleGoogleAuth()

	return (
		<div className="flex justify-center text-4xl font-medium py-4 bg-customGreen">
			Main
		</div>
	)
}
