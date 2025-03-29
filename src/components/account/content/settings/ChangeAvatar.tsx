"use client"

import { HStack } from "@chakra-ui/react"
import { HeaderUserIcon } from "../../../header"
import { ButtonTemplate, PenIconBtn, TrashIconBtn } from "../../../ui"

interface ChangeAvatarProps {
	handleAvatarChange: (newAvatar: string | "") => void
}

export const ChangeAvatar = ({ handleAvatarChange }: ChangeAvatarProps) => {
	return (
		<HStack spacing={4}>
			<HeaderUserIcon size={100} isStatic />
			<ButtonTemplate
				iconBefore={<PenIconBtn isStatic size={16} colorFill="customWhite" />}
				padding="14px"
				hoverScale={1.02}
				onClick={() => {
					handleAvatarChange("/images/book_smile.png") // імітуємо новий аватар
				}}
				isLoading={false}
				isDisabled={false}
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
				isLoading={false}
				isDisabled={false}
			>
				Видалити фото
			</ButtonTemplate>
		</HStack>
	)
}
