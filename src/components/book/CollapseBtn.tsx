// src/components/book/bookDetails/bookDetailsContent/CollapseBtn.tsx
"use client"

import { ArrowDownIcon, ArrowUpIcon } from "@/components/ui"
import { Button, Text } from "@chakra-ui/react"

interface CollapseBtnProps {
	toggleDescription: () => void
	isExpanded: boolean
	textForShow?: string
	textForCollapse?: string
	fontSize?: object
	borderBottomWidth?: number
	justifyContent?: string
}

export const CollapseBtn = ({
	toggleDescription,
	isExpanded,
	textForShow = "Читати повний опис",
	textForCollapse = "Приховати повний опис",
	fontSize = { base: "12px", lg: "14px", xl: "16px" },
	borderBottomWidth = 1,
	justifyContent = "flex-start",
}: CollapseBtnProps) => {
	return (
		<Button
			variant="link"
			fontSize={fontSize}
			color="customDarkGray"
			borderRadius={0}
			fontWeight={400}
			display="flex"
			justifyContent={justifyContent}
			w="100%"
			_hover={{ textDecoration: "none" }}
			onClick={toggleDescription}
		>
			<Text
				mr={2}
				borderBottomWidth={borderBottomWidth}
				borderBottomColor="customLightGray"
			>
				{isExpanded ? textForCollapse : textForShow}
			</Text>
			{isExpanded ? (
				<ArrowUpIcon size={12} colorFill="customDarkGray" />
			) : (
				<ArrowDownIcon size={12} colorFill="customDarkGray" />
			)}
		</Button>
	)
}
