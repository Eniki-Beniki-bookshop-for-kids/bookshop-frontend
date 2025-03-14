"use client"

import { Flex } from "@chakra-ui/react"
import { FC } from "react"
import { ButtonTemplate, MultipleCheckboxTemplate } from "../../ui"

interface AuthFormActionsProps {
	isChecked: boolean
	onCheckboxChange: (checked: boolean) => void
	onForgotPasswordClick: () => void
}

export const AuthFormActions: FC<AuthFormActionsProps> = ({
	isChecked,
	onCheckboxChange,
	onForgotPasswordClick,
}) => {
	return (
		<Flex justify="space-between" align="center" mb={5} mt={8}>
			<MultipleCheckboxTemplate
				label="Запам’ятати"
				isChecked={isChecked}
				onChange={onCheckboxChange}
			/>
			<ButtonTemplate
				bgColor="transparent"
				textColor="customLightGray"
				padding="0"
				onClick={onForgotPasswordClick}
			>
				Забули пароль?
			</ButtonTemplate>
		</Flex>
	)
}
