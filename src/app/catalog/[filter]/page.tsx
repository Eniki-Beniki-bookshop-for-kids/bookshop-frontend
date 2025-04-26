// src/app/catalog/[filter]/page.tsx
import { genreLink } from "@/types/constants"
import { Box, Heading, Text } from "@chakra-ui/react"

export default async function FilterPage({
	params,
}: {
	params: Promise<{ filter: string }>
}) {
	const { filter } = await params
	const genreItem = genreLink.find(item => item.href === `/catalog/${filter}`)

	return (
		<Box py={10} px={{ base: "20px", md: "80px" }}>
			<Heading as="h1" size="lg" mb={6}>
				{genreItem ? genreItem.label : "Категорія"}
			</Heading>
			<Text>Це сторінка для жанру: {filter}</Text>
			<Text>Тут будуть відображатися книги цього жанру.</Text>
		</Box>
	)
}
