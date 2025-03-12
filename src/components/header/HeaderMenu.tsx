"use client"

import { Flex } from "@chakra-ui/react"
import { CartIconBtn, HeartIconBtn, UserIconBtn } from "../ui"

export const HeaderMenu = () => {
	return (
		<Flex gap={6} align="center" justify="flex-end">
			<UserIconBtn size={32} />
			<HeartIconBtn
				size={32}
				colorStroke="customBlack"
				colorFill="customLightGray"
			/>
			<CartIconBtn size={32} />
		</Flex>
	)
}
