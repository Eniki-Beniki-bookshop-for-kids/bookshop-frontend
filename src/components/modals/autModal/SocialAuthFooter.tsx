"use client"

import { useAuthContext } from "@/context/AuthContext"
import { useGoogleSignIn } from "@/hooks/useGoogleSignIn"
import { Divider, Flex, ModalFooter, Text } from "@chakra-ui/react"
import { FC } from "react"
import { ButtonTemplate, LogoFB, LogoGoogle } from "../../ui"

export const SocialAuthFooter: FC<{ onClose: () => void }> = ({ onClose }) => {
	const { isRegister, setIsRegister } = useAuthContext()
	const { login } = useGoogleSignIn({ onClose })

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
					iconBefore={<LogoFB />}
				>
					Продовжити з Facebook
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
