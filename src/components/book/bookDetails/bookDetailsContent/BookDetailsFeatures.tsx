// src/components/book/bookDetails/bookDetailsContent/BookDetailsFeatures.tsx
"use client"

import { Book } from "@/types/models"
import { getBookFeatures } from "@/utils/books"
import { Box, HStack, Text, VStack } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { BookDetailsSectionName } from "./BookDetailsSectionName"
import { BookDetailsShowMoreBtn } from "./BookDetailsShowMoreBtn"

interface BookDetailsFeaturesProps {
	book: Book
}

export const BookDetailsFeatures = ({ book }: BookDetailsFeaturesProps) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const [showToggleButton, setShowToggleButton] = useState(false)
	const [fullHeight, setFullHeight] = useState(0)
	const contentRef = useRef<HTMLDivElement>(null)

	// Формуємо масив характеристик
	const features = getBookFeatures(book)

	// Визначаємо, які характеристики показувати
	const visibleFeatures = isExpanded ? features : features.slice(0, 6)

	useEffect(() => {
		if (contentRef.current) {
			const scrollHeight = contentRef.current.scrollHeight
			setFullHeight(scrollHeight)
			setShowToggleButton(features.length > 6) // Кнопка з’являється, якщо більше 6 характеристик
		}
	}, [features, isExpanded])

	const toggleDescription = () => setIsExpanded(!isExpanded)

	return (
		<VStack align="start" spacing={4} w="full">
			<BookDetailsSectionName text="Характеристики" />
			<Box
				overflow="hidden"
				maxHeight={isExpanded ? fullHeight : "auto"}
				transition="max-height 0.3s ease-in-out"
				w="full"
			>
				<VStack w="full" align="start" spacing={2} ref={contentRef}>
					{visibleFeatures.map((feature, idx) => (
						<HStack
							key={`${feature.value}+${idx}`}
							w="full"
							justify="space-between"
							borderBottomWidth={1}
							borderBottomColor="customStroke"
							py={1}
						>
							<Text
								as="span"
								fontSize={{ base: "12px", lg: "14px", xl: "16px" }}
								color="customBlack"
								fontWeight="bold"
							>
								{feature.key}
							</Text>
							<Text
								as="span"
								textAlign="end"
								fontSize={{ base: "12px", lg: "14px", xl: "16px" }}
								color="customDarkGray"
							>
								{feature.value || (
									<Text
										as="span"
										fontSize={{ base: "12px", lg: "14px", xl: "16px" }}
										color="customLightGray"
									>
										Немає даних
									</Text>
								)}
							</Text>
						</HStack>
					))}
				</VStack>
			</Box>
			{showToggleButton && (
				<BookDetailsShowMoreBtn
					toggleDescription={toggleDescription}
					isExpanded={isExpanded}
					textForCollapse="Сховати всі характеристики"
					textForShow="Показати всі характеристики"
				/>
			)}
		</VStack>
	)
}
