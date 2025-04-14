// src/components/account/content/settings/ChangeAvatar.tsx
"use client"

import { HStack } from "@chakra-ui/react"
import { FC, useRef } from "react"
import { UserAvatar } from "../../.."
import { ButtonTemplate, PenIconBtn, TrashIconBtn } from "../../../ui"

interface ChangeAvatarProps {
	handleAvatarChange: (file: File | null) => Promise<void>
	isUpdating: boolean
}

export const ChangeAvatar: FC<ChangeAvatarProps> = ({
	handleAvatarChange,
	isUpdating,
}) => {
	const fileInputRef = useRef<HTMLInputElement>(null)

	const onChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file) return

		handleAvatarChange(file) // Передаємо файл

		if (fileInputRef.current) {
			fileInputRef.current.value = ""
		}
	}

	return (
		<HStack spacing={4}>
			<UserAvatar size={100} isStatic />
			<input
				type="file"
				accept="image/*"
				ref={fileInputRef}
				onChange={onChangeAvatar}
				style={{ display: "none" }}
			/>
			<ButtonTemplate
				iconBefore={<PenIconBtn isStatic size={16} colorFill="customWhite" />}
				padding="14px"
				hoverScale={1.02}
				onClick={() => fileInputRef.current?.click()}
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
				onClick={() => handleAvatarChange(null)}
				isLoading={isUpdating}
				isDisabled={isUpdating}
			>
				Видалити фото
			</ButtonTemplate>
		</HStack>
	)
}
