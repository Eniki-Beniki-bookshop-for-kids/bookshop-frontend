//src/app/catalog/book/search/page.tsx
import { PageTitle } from "@/components"
import { BookSearchContent } from "@/components/book"
import { Box } from "@chakra-ui/react"

export default function BookSearchPage() {
	return (
		<Box pb={12}>
			<PageTitle title="Результати пошуку" />
			<BookSearchContent />
		</Box>
	)
}
