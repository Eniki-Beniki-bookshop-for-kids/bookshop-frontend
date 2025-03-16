"use client"

import { useAuthContext } from "@/context/AuthContext"
import { Flex, ModalHeader } from "@chakra-ui/react"
import { FC } from "react"
import { CloseIconBtn } from "../../ui"

export const AuthHeader: FC<{ onClose: () => void }> = ({ onClose }) => {
	const { isRegister } = useAuthContext()
	const title = isRegister ? "Реєстрація" : "Вхід / Реєстрація"

	return (
		<Flex justify="space-between" align="center" mb={9}>
			<ModalHeader
				fontSize={28}
				fontWeight="400"
				p={0}
				textAlign="center"
				color="customBlack"
				whiteSpace="nowrap"
			>
				{title}
			</ModalHeader>
			<CloseIconBtn onClick={onClose} size={36} />
		</Flex>
	)
}
