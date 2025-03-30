"use client"

import { useModal } from "@/context/ModalContext"
import { useAuthStore } from "@/stores/authStore"
import { displayPhoneNumber } from "@/utils"
import { Box, HStack, Text } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { UserAvatar } from "../.."

export const SidebarHeader = () => {
	const { user } = useAuthStore()
	const { openModal } = useModal()
	const router = useRouter()

	useEffect(() => {
		if (!user) {
			openModal("login")
			router.push("/")
		}
	}, [user, openModal, router])

	if (!user) {
		return null
	}

	return (
		<HStack spacing="10px">
			<UserAvatar size={54} isStatic />
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="space-between"
				minH="54px"
			>
				{user.firstName && user.lastName && (
					<Text fontWeight={600}>
						{user.firstName} {user.lastName}
					</Text>
				)}
				{user.phoneNumber && (
					<Text>{displayPhoneNumber(user.phoneNumber)}</Text>
				)}
			</Box>
		</HStack>
	)
}
