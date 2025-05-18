// src/components/book/bookDetails/bookDetailsContent/BookDetailsDescription.tsx
"use client"

import { ArrowDownIcon, ArrowUpIcon } from "@/components/ui"
import { Book } from "@/types/models"
import { Box, Button, Text, VStack } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"

interface BookDetailsDescriptionProps {
	book: Book
}

export const BookDetailsDescription = ({
	book,
}: BookDetailsDescriptionProps) => {
	const { description } = book
	const [isExpanded, setIsExpanded] = useState(false)
	const [showToggleButton, setShowToggleButton] = useState(false)
	const [fullHeight, setFullHeight] = useState(0)
	const textRef = useRef<HTMLDivElement>(null)
	const maxCollapsedHeight = 120 // Приблизно для 5 рядків

	useEffect(() => {
		if (textRef.current) {
			const scrollHeight = textRef.current.scrollHeight
			setFullHeight(scrollHeight)
			setShowToggleButton(scrollHeight > maxCollapsedHeight)
		}
	}, [description])

	const toggleDescription = () => setIsExpanded(!isExpanded)

	return (
		<VStack align="start" spacing={4}>
			<Text as="h2" fontSize={{ base: "20px", lg: "24px", xl: "28px" }}>
				Опис
			</Text>
			<Box
				overflow="hidden"
				maxHeight={isExpanded ? fullHeight : maxCollapsedHeight}
				transition="max-height 0.3s ease-in-out"
			>
				<Text
					ref={textRef}
					color="customDarkGray"
					fontSize={{ base: "12px", lg: "14px", xl: "16px" }}
					whiteSpace="normal"
				>
					{description}
				</Text>
			</Box>
			{description && description.length > 0 && showToggleButton && (
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
					{isExpanded ? "Приховати повний опис" : "Читати повний опис"}
				</Button>
			)}
		</VStack>
	)
}
