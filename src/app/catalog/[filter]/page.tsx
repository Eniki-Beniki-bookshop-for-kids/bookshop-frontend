// src/app/catalog/[filter]/page.tsx
import { PageTitle } from "@/components"
import { FilterBooks } from "@/components/book"
import { genreLink } from "@/types/constants"
import { Box } from "@chakra-ui/react"

export default async function FilterPage({
	params,
}: {
	params: Promise<{ filter: string }>
}) {
	const { filter } = await params
	const genreItem = genreLink.find(item => item.href === `/catalog/${filter}`)

	return (
		<Box pb={12}>
			<PageTitle title={genreItem?.label || ""} />
			<FilterBooks initialFilter={filter} />
		</Box>
	)
}
