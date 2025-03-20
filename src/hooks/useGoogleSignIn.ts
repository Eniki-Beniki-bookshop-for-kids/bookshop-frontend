import { useGoogleLogin } from "@react-oauth/google"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export const useGoogleSignIn = ({ onClose }: { onClose: () => void }) => {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const [authCode, setAuthCode] = useState<string | null>(null)

	const login = useGoogleLogin({
		flow: "auth-code",
		redirect_uri: `${window.location.origin}/api/auth/google/callback`,
		onSuccess: codeResponse => {
			setAuthCode(codeResponse.code)
		},
		onError: error => {
			console.error("Помилка входу через Google:", error)
		},
	})

	useEffect(() => {
		if (authCode) {
			onClose()
			const fullPath = searchParams.toString()
				? `${pathname}?${searchParams.toString()}`
				: pathname
			router.push(fullPath)
			console.log("Тут відправляємо на бекенд наш код авторизації:", authCode)
			setAuthCode(null)
		}
	}, [authCode, onClose, router, pathname, searchParams])

	return { login }
}
