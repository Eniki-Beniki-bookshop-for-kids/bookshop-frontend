// src/components/hero/MenuItem.tsx
"use client"

import { HomeSidebarMenuItem } from "@/types/interfaces"
import { Box, HStack, Text } from "@chakra-ui/react"
import Link from "next/link"
import { useState } from "react"
import { ArrowRightIcon } from "../ui"

interface MenuItemProps {
	item: HomeSidebarMenuItem
	onUpdateFilters: (filter: Record<string, string>) => void
}

export const MenuItem = ({ item, onUpdateFilters }: MenuItemProps) => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<Box as={Link} href={item.href} w="full">
			<HStack
				w="full"
				align="center"
				cursor="pointer"
				color={isHovered ? "customViolet" : "customBlack"}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onClick={() => {
					onUpdateFilters(item.filter)
				}}
				justify="space-between"
			>
				<Text
					fontSize={{ sm: "14px", md: "14px", lg: "16px" }}
					fontWeight={item.label === "Всі книги" ? 600 : 400}
				>
					{item.label}
				</Text>
				<ArrowRightIcon
					colorFill={isHovered ? "customViolet" : "customBlack"}
				/>
			</HStack>
		</Box>
	)
}
