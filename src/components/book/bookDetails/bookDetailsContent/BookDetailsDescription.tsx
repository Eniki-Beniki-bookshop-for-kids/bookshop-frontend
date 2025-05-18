// src/components/book/bookDetails/bookDetailsContent/BookDetailsDescription.tsx
"use client"

import { Book } from "@/types/models"
import { Box, Text, VStack } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { BookDetailsSectionName } from "./BookDetailsSectionName"
import { BookDetailsShowMoreBtn } from "./BookDetailsShowMoreBtn"

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
	const maxCollapsedHeight = 124 // Приблизно для 5 рядків

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
			<BookDetailsSectionName text="Опис" />
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
					{description ? (
						description
					) : (
						<Text as="i" fontSize={{ base: "12px", lg: "14px", xl: "16px" }}>
							Відсутній опис цієї книжки
						</Text>
					)}
				</Text>
			</Box>
			{showToggleButton && (
				<BookDetailsShowMoreBtn
					toggleDescription={toggleDescription}
					isExpanded={isExpanded}
				/>
			)}
		</VStack>
	)
}
