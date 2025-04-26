// src/app/page.tsx
"use client"

import { useAuthCheck, useHomePageBooks } from "@/hooks"
import { Box, Text, VStack } from "@chakra-ui/react"
import { Book } from "../types/models"

export default function Home() {
	useAuthCheck()

	const { bestsellerBooks, discountBooks, newBooks } = useHomePageBooks()

	return (
		<VStack spacing={8} py={4}>
			<Text fontSize="4xl" fontWeight="bold" textAlign="center">
				ЦЕ ГОЛОВНА СТОРІНКА
			</Text>

			{/* Карусель 1: Рекомендації для вас (Бестселери) */}
			<Box w="full">
				<Text fontSize="2xl" fontWeight="bold" mb={4}>
					Рекомендації для вас
				</Text>
				{bestsellerBooks.length > 0 ? (
					<Box>
						{bestsellerBooks.map(book => (
							<Text key={book.bookId}>
								{book.title} - рік випуску {book.publicationYear}
							</Text>
						))}
					</Box>
				) : (
					<Text color="gray.500">Немає бестселерів</Text>
				)}
			</Box>

			{/* Карусель 2: Знижки */}
			<Box w="full">
				<Text fontSize="2xl" fontWeight="bold" mb={4}>
					Знижки
				</Text>
				{discountBooks.length > 0 ? (
					<Box>
						{discountBooks.map((book: Book) => (
							<Text key={book.bookId}>
								{book.title} - знижка {book.discount}
							</Text>
						))}
					</Box>
				) : (
					<Text color="gray.500">Немає книг зі знижками</Text>
				)}
			</Box>

			{/* Карусель 3: Новинки */}
			<Box w="full">
				<Text fontSize="2xl" fontWeight="bold" mb={4}>
					Новинки
				</Text>
				{newBooks.length > 0 ? (
					<Box>
						{newBooks.map(book => (
							<Text key={book.bookId}>
								{book.title} - з&quot;явилась на складі {book.createdAt}
							</Text>
						))}
					</Box>
				) : (
					<Text color="gray.500">Немає новинок</Text>
				)}
			</Box>
		</VStack>
	)
}
