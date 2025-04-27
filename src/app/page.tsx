// src/app/page.tsx
"use client"

import { PageTitle } from "@/components"
import { BookCarousel } from "@/components/book"
import { Hero } from "@/components/hero"
import { useAuthCheck, useHomePageBooks } from "@/hooks"
import { VStack } from "@chakra-ui/react"

export default function Home() {
	useAuthCheck()

	const { bestsellerBooks, discountBooks, newBooks } = useHomePageBooks()

	return (
		<VStack spacing={8} py={8}>
			<Hero />
			<PageTitle title="Інтернет-магазин дитячих книг ЕникиБеники" mb={0} />
			<VStack spacing="80px" pt={10} w="full" align="start">
				<BookCarousel
					title="Бестселери та популярні книги"
					books={bestsellerBooks}
				/>
				<BookCarousel title="Знижки" books={discountBooks} />
				<BookCarousel title="Новинки" books={newBooks} />
			</VStack>
		</VStack>
	)
}
