//src/components/header/Header.tsx
"use client"

import { Box, HStack, VStack } from "@chakra-ui/react"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

import { pageHeaderTypes, TypesHeader } from "@/types/constants"
import { Logo } from "../Logo"
import { CatalogBtn } from "../catalog"
import { HeaderBg } from "./HeaderBg"
import { HeaderMenu } from "./HeaderMenu"
import { NavBar } from "./NavBar"
import { Phone } from "./Phone"

export const Header = () => {
	const pathname = usePathname()

	const headerType = useMemo(() => {
		return pageHeaderTypes[pathname] || TypesHeader.Full
	}, [pathname])

	const waveHeight = headerType === TypesHeader.Minimal ? 153 : 258

	return (
		<Box
			as="header"
			position="relative"
			height={`${waveHeight}px`}
			// overflow="hidden"
		>
			<HeaderBg headerType={headerType} />
			<VStack
				px={{ base: "20px", md: "80px" }}
				align="center"
				marginTop="20px"
				position="relative"
				color="customBlack"
				flexDirection="column"
				spacing={3}
			>
				<HStack justify="space-between" width="100%" align="center">
					<Logo />
					{headerType === TypesHeader.Full && <NavBar />}
					<Phone />
				</HStack>
				{headerType === TypesHeader.Full && (
					<HStack w="100%" justify="space-between" align="center">
						<CatalogBtn />
						<HeaderMenu />
					</HStack>
				)}
			</VStack>
		</Box>
	)
}
