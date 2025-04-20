//src/components/header/Header.tsx
"use client"

import { Box, Flex } from "@chakra-ui/react"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

import { SidebarMenuProvider } from "@/context/SidebarMenuContext"
import { pageHeaderTypes, TypesHeader } from "@/types/constants"
import { Logo } from "../Logo"
import { CatalogSidebar } from "./CatalogSidebar"
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
					{headerType === TypesHeader.Full && <NavBar />}
					<Phone />
				</Flex>
				{headerType === TypesHeader.Full && (
					<>
						<SidebarMenuProvider>
							<CatalogSidebar />
						</SidebarMenuProvider>

						<Box width="100%">
							<HeaderMenu />
						</Box>
					</>
				)}
			</Flex>
		</Box>
	)
}
