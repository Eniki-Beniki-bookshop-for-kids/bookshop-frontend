// src/app/page.tsx
"use client"

"use client"

import { Loader, PageTitle } from "@/components"
import { BookCarousel } from "@/components/book"
import { Hero } from "@/components/hero"
import { useAuthCheck, useHomePageBooks } from "@/hooks"
import { VStack } from "@chakra-ui/react"

export default function Home() {
	useAuthCheck()

	const {
		bestsellerBooks,
		discountBooks,
		newBooks,
		isLoading,
		error,
		clearError,
	} = useHomePageBooks()

	if (error) {
		clearError()
		console.error("Error loading books:", error)
		throw new Error("Failed to load books")
	}

	return (
		<VStack spacing={8} py={8}>
			<Hero />
			<PageTitle title="Інтернет-магазин дитячих книг ЕникиБеники" mb={0} />
			<VStack spacing="80px" pt={10} w="full" align="center">
				<Loader isLoading={isLoading} variant="jelly" size="60" />
				{!isLoading && !error && (
					<>
						<BookCarousel
							title="Бестселери та популярні книги"
							books={bestsellerBooks}
						/>
						<BookCarousel title="Знижки" books={discountBooks} />
						<BookCarousel title="Новинки" books={newBooks} />
					</>
				)}
			</VStack>
		</VStack>
	)
}
