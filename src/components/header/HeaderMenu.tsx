//src/components/header/HeaderMenu.tsx
"use client"

import { useModal } from "@/context/ModalContext"
import { Flex } from "@chakra-ui/react"
import { UserAvatar } from "../"
import { CartIconBtn, HeartIconBtn } from "../ui"

export const HeaderMenu = () => {
	const { openModal } = useModal()

	return (
		<Flex gap={6} align="center" justify="flex-end">
			<UserAvatar />
			<HeartIconBtn
				size={32}
				colorStroke="customBlack"
				colorFill="customViolet"
				onClick={() => console.log("Show my favorites")}
			/>
			<CartIconBtn size={32} onClick={() => openModal("cart")} />
		</Flex>
	)
}
