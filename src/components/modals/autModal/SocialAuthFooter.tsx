"use client"

import { Divider, Flex, ModalFooter, Text } from "@chakra-ui/react"
import { FC } from "react"
import { ButtonTemplate, LogoApple, LogoGoogle } from "../../ui"

interface SocialAuthFooterProps {
	onSwitch: () => void
}

export const SocialAuthFooter: FC<SocialAuthFooterProps> = ({ onSwitch }) => {
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
					onClick={onSwitch}
					href="/register"
				>
					Не маєте акаунту? Зареєструватись
				</ButtonTemplate>
			</Flex>
		</ModalFooter>
	)
}
