"use client"

import { HStack } from "@chakra-ui/react"
import { FC } from "react"
import { UserAvatar } from "../../.."
import { ButtonTemplate, PenIconBtn, TrashIconBtn } from "../../../ui"

interface ChangeAvatarProps {
	handleAvatarChange: (newAvatar: string | "") => void
	isUpdating: boolean
}

export const ChangeAvatar: FC<ChangeAvatarProps> = ({
	handleAvatarChange,
	isUpdating,
}) => {
	return (
		<HStack spacing={4}>
			<UserAvatar size={100} isStatic />
			<ButtonTemplate
				iconBefore={<PenIconBtn isStatic size={16} colorFill="customWhite" />}
				padding="14px"
				hoverScale={1.02}
				onClick={() => {
					handleAvatarChange("/images/book_smile.png") // імітуємо новий аватар
				}}
				isLoading={isUpdating}
				isDisabled={isUpdating}
			>
				Змінити фото
			</ButtonTemplate>
			<ButtonTemplate
				iconBefore={<TrashIconBtn isStatic />}
				padding="14px"
				color="customBlack"
				borderColor="customViolet"
				borderWidth={1}
				bgColor="#FFFFFF"
				_hover={{
					backgroundColor: "customLavender",
					borderColor: "customViolet",
				}}
				hoverScale={1.02}
				onClick={() => {
					handleAvatarChange("")
				}}
				isLoading={isUpdating}
				isDisabled={isUpdating}
			>
				Видалити фото
			</ButtonTemplate>
		</HStack>
	)
}
