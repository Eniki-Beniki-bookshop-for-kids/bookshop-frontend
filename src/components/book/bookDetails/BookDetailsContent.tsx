// src/components/book/bookDetails/BookDetailsContent.tsx
"use client"

import { Book } from "@/types/models"
import { Box, HStack, Text, VStack } from "@chakra-ui/react"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { SuccessCircleIcon } from "../../ui"
import { BookRating } from "../bookCard/BookRating"

interface BookDetailsContentProps {
	book: Book | null
}

export const BookDetailsContent = ({ book }: BookDetailsContentProps) => {
	if (!book) return null

	const { title, author, price, reviews, stockQuantity, bookType } = book

	return (
		<HStack
			spacing={12}
			p={8}
			pb={12}
			align="start"
			justify="space-between"
			h="full"
		>
			<VStack align="start" spacing={12} color="customBlack">
				<VStack align="start" spacing={2}>
					<Text as="h1" fontSize="28px">
						{title}
					</Text>
					<Text color="customGray" fontSize="24px">
						{author}
					</Text>
					<BookRating reviews={reviews} />
				</VStack>

				<VStack align="start" spacing={4}>
					<Text fontSize="20px">Тип книги</Text>
					<HStack spacing={3}>
						{bookType.map((type, idx) => (
							<Box
								key={idx}
								bg={idx === 0 ? "#FFF" : "customBgGray"}
								borderWidth={idx === 0 ? "1px" : "0px"}
								borderColor="customViolet"
								borderRadius="30px"
								py="10px"
								px={8}
							>
								<Text textAlign="center">{type}</Text>
							</Box>
						))}
					</HStack>
				</VStack>
			</VStack>
			<VStack
				align="start"
				spacing={4}
				p={5}
				w="266px"
				bg="customBgGray"
				borderRadius="30px"
			>
				<Text color="customBlack" fontSize="24px">
					{price} ₴
				</Text>
				{stockQuantity > 0 ? (
					<HStack>
						<SuccessCircleIcon />
						<Text color="customGreen">В наявності</Text>
					</HStack>
				) : (
					<HStack>
						<IoIosCloseCircleOutline color="red" size="18px" />
						<Text color="red">Немає в наявності</Text>
					</HStack>
				)}
			</VStack>
		</HStack>
	)
}
