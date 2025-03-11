"use client"

import { Box, Button, Flex, Image, Link } from "@chakra-ui/react"
import NextLink from "next/link"

import { headerNav } from "../types/constants"
import { HeaderBg } from "./ui"
// import { useState } from "react"
// import AuthModal from './AuthModal';

export const Header = () => {
	// const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

	return (
		<Box as="header" position="relative" height="228px" overflow="hidden">
			{/* SVG фон */}
			<Box
				position="absolute"
				top="0"
				left="0"
				width="100%"
				height="100%"
				zIndex="-1"
			>
				<HeaderBg />
			</Box>
			<Flex
				justify="space-between"
				align="center"
				maxW="1200px"
				mx="auto"
				marginTop="20px"
				position="relative"
				zIndex="1"
				color="customBlack"
			>
				<Link
					as={NextLink}
					href="/"
					fontSize="xl"
					fontWeight="bold"
					_hover={{
						transform: "scale(1.1)",
						transition: "transform 0.2s ease-in-out",
					}}
				>
					<Box bg="customWhite" borderRadius="50%" p={2} display="inline-block">
						<Image
							src="/images/LOGO_v1.png"
							alt="Логотип"
							width="200px"
							objectFit="contain"
						/>
					</Box>
				</Link>
				<Flex as="nav" gap={4}>
					{headerNav.map(({ href, label }) => (
						<Link as={NextLink} key={href} href={href}>
							{label}
						</Link>
					))}
				</Flex>
				<Button
					// onClick={() => setIsAuthModalOpen(true)}
					variant="outline"
					colorScheme="white"
				>
					Увійти
				</Button>
			</Flex>
			{/* <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} /> */}
		</Box>
	)
}
