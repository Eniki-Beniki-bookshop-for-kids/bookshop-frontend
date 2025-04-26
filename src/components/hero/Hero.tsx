// src/components/hero/Hero.tsx
"use client"

import { HStack } from "@chakra-ui/react"
import { HomeSidebarMenu } from "./HomeSidebarMenu"
import { VideoSeries } from "./VideoSeries"

export const Hero = () => {
	return (
		<HStack
			align="center"
			justifyContent="space-between"
			w="full"
			h={{ base: "300px", md: "400px", lg: "500px" }}
			spacing={8}
		>
			<HomeSidebarMenu />
			<VideoSeries />
		</HStack>
	)
}
