// src/components/book/bookDetails/bookDetailsContent/BookDetailsHeader.tsx
"use client"

import { Book } from "@/types/models"
import { Box, HStack, Text, VStack } from "@chakra-ui/react"
import { BookRating } from "../../bookCard"
import { BookDetailsSectionName } from "./BookDetailsSectionName"

export const BookDetailsHeader = ({ book }: { book: Book }) => {
	const { title, author, reviews, bookType } = book

	return (
		<>
			<VStack align="start" spacing={2}>
				<Text as="h1" fontSize={{ base: "20px", lg: "24px", xl: "28px" }}>
					{title}
				</Text>
				<Text
					color="customGray"
					fontSize={{ base: "16px", lg: "20px", xl: "24px" }}
				>
					{author}
				</Text>
				<BookRating reviews={reviews} />
			</VStack>

			<VStack align="start" spacing={4}>
				<BookDetailsSectionName text="Тип книги" />
				<HStack spacing={3}>
					{bookType.map((type, idx) => (
						<Box
							key={idx}
							bg={idx === 0 ? "#FFF" : "customBgGray"}
							borderWidth={idx === 0 ? "1px" : "0px"}
							borderColor="customViolet"
							borderRadius="30px"
							py="10px"
							px={{ base: 2, lg: 4, xl: 6 }}
						>
							<Text
								textAlign="center"
								fontSize={{ base: "12px", lg: "14px", xl: "16px" }}
								whiteSpace="nowrap"
							>
								{type}
							</Text>
						</Box>
					))}
				</HStack>
			</VStack>
		</>
	)
}
