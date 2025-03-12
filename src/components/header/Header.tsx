"use client"

import { Box, Flex } from "@chakra-ui/react"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

import { pageHeaderTypes } from "@/types/constants"
import { HeaderBg } from "./HeaderBg"
import { HeaderMenu } from "./HeaderMenu"
import { Logo } from "./Logo"
import { NavBar } from "./NavBar"
import { Phone } from "./Phone"

export const Header = () => {
	const pathname = usePathname()

	const headerType = useMemo(() => {
		return pageHeaderTypes[pathname] || "full"
	}, [pathname])

	const waveHeight = headerType === "minimal" ? 153 : 258

	return (
		<Box
			as="header"
			position="relative"
			height={`${waveHeight}px`}
			overflow="hidden"
		>
			<HeaderBg headerType={headerType} />
			<Flex
				justify="space-between"
				px={{ base: "20px", md: "80px" }}
				align="center"
				mx="auto"
				marginTop="20px"
				position="relative"
				color="customBlack"
				flexDirection="column"
			>
				<Flex justify="space-between" width="100%" align="center">
					<Logo />
					{headerType === "full" && <NavBar />}
					<Phone />
				</Flex>
				<Box width="100%">
					<HeaderMenu />
				</Box>
			</Flex>
		</Box>
	)
}
