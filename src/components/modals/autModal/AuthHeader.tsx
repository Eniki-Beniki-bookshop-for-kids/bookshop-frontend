"use client"

import { Flex, ModalHeader } from "@chakra-ui/react"
import { FC } from "react"
import { CloseIconBtn } from "../../ui"

interface AuthHeaderProps {
	title: string
	onClose: () => void
}

export const AuthHeader: FC<AuthHeaderProps> = ({ title, onClose }) => {
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
