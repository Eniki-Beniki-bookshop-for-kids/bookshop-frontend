//src/hooks/useTelegramSignIn.ts
"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export const useTelegramSignIn = ({ onClose }: { onClose: () => void }) => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const tgBotName = process.env.NEXT_PUBLIC_TELEGRAM_BOT_NAME
	if (!tgBotName) {
		throw new Error(
			"NEXT_PUBLIC_TELEGRAM_BOT_NAME is not defined in environment variables",
		)
	}

	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

	useEffect(() => {
		const script = document.createElement("script")
		script.src = "https://telegram.org/js/telegram-widget.js?22"
		script.async = true
		script.setAttribute("data-telegram-login", tgBotName)
		script.setAttribute("data-size", "large")
		script.setAttribute("data-radius", "8")
		script.setAttribute("data-userpic", "false")
		script.setAttribute(
			"data-auth-url",
			`${baseUrl}/api/auth/telegram/callback`,
		)
		script.setAttribute("data-request-access", "write")
		document.getElementById("telegram-login-container")?.appendChild(script)

		return () => {
			document.getElementById("telegram-login-container")?.removeChild(script)
		}
	}, [baseUrl, tgBotName])

	useEffect(() => {
		const telegramId = searchParams.get("telegram_id")
		if (telegramId) {
			const userData = {
				telegramId: telegramId,
				firstName: searchParams.get("first_name") || "",
				lastName: searchParams.get("last_name") || "",
				username: searchParams.get("username") || "",
				photoUrl: searchParams.get("photo_url") || "",
				authDate: searchParams.get("auth_date") || "",
			}

			console.log("Telegram User Data in Frontend:", userData)

			onClose()

			router.replace("/", { scroll: false })
		}
	}, [searchParams, onClose, router])
}
