//src/components/UserAvatar.tsx
"use client"

import { useUserAvatar } from "@/hooks/useUserAvatar"
import { useAuthStore } from "@/stores/authStore"
import { Box, Text } from "@chakra-ui/react"
import Image from "next/image"
import { FC } from "react"
import { UserIconBtn } from "./ui"

interface UserAvatarProps {
	size?: number
	isStatic?: boolean
}

export const UserAvatar: FC<UserAvatarProps> = ({
	size = 40,
	isStatic = false,
}) => {
	const { avatarUrl, handleUserClick } = useUserAvatar()
	const { user } = useAuthStore()

	const firstLetter = user?.email
		? user.email.trim().charAt(0).toUpperCase()
		: ""

	const avatarSrc = avatarUrl || "/images/book_with_heart.png"

	return (
		<>
			{user && avatarUrl && (
				<Box
					width={`${size}px`}
					height={`${size}px`}
					borderRadius="50%"
					overflow="hidden"
					display="flex"
					alignItems="center"
					justifyContent="center"
					className={isStatic ? "" : "cursor-pointer"}
					onClick={handleUserClick}
				>
					<Image
						priority
						src={avatarSrc}
						alt="User Avatar"
						width={size}
						height={size}
						style={{ objectFit: "cover", width: "100%", height: "100%" }}
					/>
				</Box>
			)}
			{user && !avatarUrl && (
				<Box
					width={`${size}px`}
					height={`${size}px`}
					borderRadius="50%"
					bg="customDarkGray"
					display="flex"
					alignItems="center"
					justifyContent="center"
					className={isStatic ? "" : "cursor-pointer"}
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
