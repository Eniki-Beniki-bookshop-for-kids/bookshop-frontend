//src/hooks/useFacebookSignIn.ts
"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export const useFacebookSignIn = ({ onClose }: { onClose: () => void }) => {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const [authCode, setAuthCode] = useState<string | null>(null)

	const login = () => {
		const clientId = process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID
		const redirectUri = `${window.location.origin}/api/auth/facebook/callback`
		const scope = "public_profile,email"
		const state = Math.random().toString(36).substring(2)

		const authUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${clientId}&redirect_uri=${encodeURIComponent(
			redirectUri,
		)}&scope=${scope}&state=${state}&response_type=code`

		window.location.href = authUrl
	}

	useEffect(() => {
		if (authCode) {
			onClose()
			const fullPath = searchParams.toString()
				? `${pathname}?${searchParams.toString()}`
				: pathname
			router.push(fullPath)
			console.log(
				"Тут відправляємо на бекенд наш код авторизації (Facebook):",
				authCode,
			)
			setAuthCode(null)
		}
	}, [authCode, onClose, router, pathname, searchParams])

	return { login }
}
