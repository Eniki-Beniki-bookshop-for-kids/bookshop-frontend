// src/components/book/bookDetails/bookDetailsContent/BookDetailsShowMoreBtn.tsx
"use client"

import { ArrowDownIcon, ArrowUpIcon } from "@/components/ui"
import { Button } from "@chakra-ui/react"

interface BookDetailsShowMoreBtnProps {
	toggleDescription: () => void
	isExpanded: boolean
	textForShow?: string
	textForCollapse?: string
}

export const BookDetailsShowMoreBtn = ({
	toggleDescription,
	isExpanded,
	textForShow = "Читати повний опис",
	textForCollapse = "Приховати повний опис",
}: BookDetailsShowMoreBtnProps) => {
	return (
		<Button
			variant="link"
			fontSize={{ base: "12px", lg: "14px", xl: "16px" }}
			color="customDarkGray"
			borderBottomWidth={1}
			borderBottomColor="customLightGray"
			borderRadius={0}
			fontWeight={400}
			_hover={{ textDecoration: "none" }}
			onClick={toggleDescription}
			rightIcon={
				isExpanded ? (
					<ArrowUpIcon size={12} colorFill="customDarkGray" />
				) : (
					<ArrowDownIcon size={12} colorFill="customDarkGray" />
				)
			}
		>
			{isExpanded ? textForCollapse : textForShow}
		</Button>
	)
}
