"use client"

import { useAuthContext } from "@/context/AuthContext"
import { Divider, Flex, ModalFooter, Text } from "@chakra-ui/react"
import { useGoogleLogin } from "@react-oauth/google"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FC, useEffect, useState } from "react"
import { ButtonTemplate, LogoApple, LogoGoogle } from "../../ui"

export const SocialAuthFooter: FC<{ onClose: () => void }> = ({ onClose }) => {
	const { isRegister, setIsRegister } = useAuthContext()
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const [authCode, setAuthCode] = useState<string | null>(null)

	// Функція для входу через Google
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

	// Функція для обробки коду авторизації
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

	const buttonText = isRegister
		? "Вже маєте акаунт? Увійти"
		: "Не маєте акаунту? Зареєструватись"

	return (
		<ModalFooter flexDirection="column" alignItems="stretch" p={0}>
			<Flex flexDirection="column" flex={1}>
				<Flex align="center" gap={2} mb={6}>
					<Divider />
					<Text>або</Text>
					<Divider />
				</Flex>
				<ButtonTemplate
					bgColor="customWhite"
					textColor="customBlack"
					mb={4}
					padding="18px"
					hoverScale={1.02}
					iconBefore={<LogoGoogle />}
					onClick={() => login()}
				>
					Продовжити з Google
				</ButtonTemplate>
				<ButtonTemplate
					bgColor="customWhite"
					textColor="customBlack"
					mb={8}
					padding="18px"
					hoverScale={1.02}
					iconBefore={<LogoApple />}
				>
					Продовжити з Apple
				</ButtonTemplate>
			</Flex>
			<Flex flex={1} alignItems="center" justifyContent="center" height="100%">
				<ButtonTemplate
					bgColor="transparent"
					textColor="customLightGray"
					padding="0"
					onClick={() => setIsRegister(!isRegister)}
				>
					{buttonText}
				</ButtonTemplate>
			</Flex>
		</ModalFooter>
	)
}
