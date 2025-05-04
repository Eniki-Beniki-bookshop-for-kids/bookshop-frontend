//src/app/catalog/book/search/page.tsx
"use client"

import { PageTitle } from "@/components"
import { BookSearchContent } from "@/components/book"
import { Box } from "@chakra-ui/react"

export default function BookSearchPage() {
	return (
		<Box pb={12}>
			<PageTitle title="Пошук книги за назвою та автором" />
			<BookSearchContent />
		</Box>
	)
}
