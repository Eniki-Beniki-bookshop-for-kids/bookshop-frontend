//src/components/modals/autModal/AuthFormActions.tsx
"use client"

import { useAuthContext } from "@/context/AuthContext"
import { Flex } from "@chakra-ui/react"
import { FC } from "react"
import { ButtonTemplate, MultipleCheckboxTemplate } from "../../ui"

export const AuthFormActions: FC<{ onForgotPasswordClick: () => void }> = ({
	onForgotPasswordClick,
}) => {
	const { isChecked, setIsChecked, isRegister } = useAuthContext()

	return (
		<Flex justify="space-between" align="center" mb={5} mt={8}>
			<MultipleCheckboxTemplate
				label="Запам’ятати"
				isChecked={isChecked}
				onChange={checked => {
					setIsChecked(checked)
				}}
			/>
			{!isRegister && (
				<ButtonTemplate
					bgColor="transparent"
					textColor="customLightGray"
					padding="0"
					onClick={onForgotPasswordClick}
				>
					Забули пароль?
				</ButtonTemplate>
			)}
		</Flex>
	)
}
