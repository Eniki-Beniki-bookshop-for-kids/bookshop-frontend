"use client"

import { useUserAvatar } from "@/hooks/useUserAvatar"
import { useAuthStore } from "@/stores/authStore"
import { Box, Image, Text } from "@chakra-ui/react"
import { UserIconBtn } from "../ui"

export const HeaderUserIcon = () => {
	const { avatarUrl, handleUserClick } = useUserAvatar()
	const user = useAuthStore(state => state.user)

	const firstLetter = user?.email
		? user.email.trim().charAt(0).toUpperCase()
		: ""

	return (
		<>
			{user && avatarUrl && (
				<Box
					width="40px"
					height="40px"
					borderRadius="50%"
					overflow="hidden"
					cursor="pointer"
					onClick={handleUserClick}
				>
					<Image
						src={avatarUrl}
						alt="User Avatar"
						width="100%"
						height="100%"
						onError={e => (e.currentTarget.src = "/images/fallback_avatar.png")}
					/>
				</Box>
			)}
			{user && !avatarUrl && (
				<Box
					width="40px"
					height="40px"
					borderRadius="50%"
					bg="customDarkGray"
					display="flex"
					alignItems="center"
					justifyContent="center"
					cursor="pointer"
					onClick={handleUserClick}
				>
					<Text color="customWhite" fontSize="24px" fontWeight="bold">
						{firstLetter}
					</Text>
				</Box>
			)}
			{!user && <UserIconBtn size={32} onClick={handleUserClick} />}
		</>
	)
}
