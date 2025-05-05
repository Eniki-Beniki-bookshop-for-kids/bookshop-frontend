// src/app/catalog/book/search/page.tsx
import { PageTitle } from "@/components"
import { BookSearchContentWrapper } from "@/components/book"
import { Box } from "@chakra-ui/react"

export const renderingMode = "force-dynamic" // Вимикаємо SSR/SSG для цієї сторінки

export default async function BookSearchPage({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>
}) {
	const resolvedSearchParams = await searchParams
	const query = resolvedSearchParams?.query || ""
	return (
		<Box pb={12}>
			<PageTitle title="Пошук книги за назвою та автором" />
			<BookSearchContentWrapper initialQuery={query} />
		</Box>
	)
}

// динамічні метадані для покращення SEO
export async function generateMetadata({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>
}) {
	const resolvedSearchParams = await searchParams
	const query = resolvedSearchParams?.query || ""
	return {
		title: query ? `Пошук книг: ${query}` : "Пошук книги за назвою та автором",
	}
}
