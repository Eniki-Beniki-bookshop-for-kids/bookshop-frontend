//src/app/catalog/[genre]/page.tsx
import { genreLink } from "@/types/constants"
import { Box, Heading } from "@chakra-ui/react"
import { Metadata } from "next"

interface GenrePageProps {
	params: Promise<{ genre: string }>
}

export async function generateStaticParams() {
	return genreLink.map(genre => ({
		genre: genre.href.replace("/", ""),
	}))
}

export async function generateMetadata({
	params,
}: GenrePageProps): Promise<Metadata> {
	const { genre: genreParam } = await params
	const genre =
		genreLink.find(g => g.href === `/${genreParam}`)?.label || genreParam
	return {
		title: `${genre} | Каталог | Еники-Беники`,
		description: `Перегляньте книги в жанрі ${genre} у книгарні Еники-Беники.`,
		openGraph: {
			title: `${genre} | Каталог | Еники-Беники`,
			description: `Перегляньте книги в жанрі ${genre} у книгарні Еники-Беники.`,
			url: `${
				process.env.NEXT_PUBLIC_BASE_URL ||
				"https://bookshop-frontend-qtkz.onrender.com"
			}/catalog/${genreParam}`,
			type: "website",
		},
	}
}

export default async function GenrePage({ params }: GenrePageProps) {
	const { genre: genreParam } = await params
	const genre =
		genreLink.find(g => g.href === `/${genreParam}`)?.label || genreParam

	return (
		<Box p={4}>
			<Heading>{genre}</Heading>
		</Box>
	)
}
