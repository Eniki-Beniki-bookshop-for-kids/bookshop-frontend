//src/components/account/sidebar/AccountSidebarHeader.tsx
"use client"

import { useAuthStore } from "@/stores/authStore"
import { displayPhoneNumber } from "@/utils"
import { Box, HStack, Text } from "@chakra-ui/react"
import { UserAvatar } from "../.."

export const AccountSidebarHeader = () => {
	const { user } = useAuthStore()

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
