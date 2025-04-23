// src/components/catalog/CatalogSidebar.tsx
"use client"

import { CatalogMenuItem } from "@/types/interfaces"
import { Box, HStack, Text } from "@chakra-ui/react"
import Link from "next/link"
import { useState } from "react"
import { ArrowRightIcon } from "../ui"

interface MenuItemProps {
	item: CatalogMenuItem
	onUpdateFilters: (filter: Record<string, string>) => void
}

export const MenuItem = ({ item, onUpdateFilters }: MenuItemProps) => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<Box as={Link} href={item.href} w="full">
			<HStack
				spacing={2}
				align="center"
				cursor="pointer"
				color={isHovered ? "customViolet" : "customBlack"}
				transition="all 0.3s ease-in-out"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onClick={() => {
					onUpdateFilters(item.filter)
				}}
				justify="space-between"
				sx={{
					"&:hover": {
						transform: "scale(1.02)",
						fontWeight: "600",
					},
				}}
			>
				<Text>{item.label}</Text>
				<ArrowRightIcon
					colorFill={isHovered ? "customViolet" : "customBlack"}
				/>
			</HStack>
		</Box>
	)
}
