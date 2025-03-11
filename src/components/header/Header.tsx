"use client"

import { Box, Flex } from "@chakra-ui/react"

import { HeaderBg } from "./HeaderBg"
import { Logo } from "./Logo"
import { NavBar } from "./NavBar"
import { Phone } from "./Phone"

export const Header = () => {
	return (
		<Box as="header" position="relative" height="258px" overflow="hidden">
			<HeaderBg />
			<Flex
				justify="space-between"
				px={{ base: "20px", md: "80px" }}
				align="center"
				mx="auto"
				marginTop="20px"
				position="relative"
				color="customBlack"
			>
				<Logo />
				<NavBar />
				<Phone />
			</Flex>
		</Box>
	)
}
