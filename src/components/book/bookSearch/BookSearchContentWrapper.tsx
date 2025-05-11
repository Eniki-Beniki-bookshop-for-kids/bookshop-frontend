"use client"

import dynamic from "next/dynamic"

const BookSearchContent = dynamic(
	() => import("./BookSearchContent").then(mod => mod.BookSearchContent),
	{ ssr: false },
)

export const BookSearchContentWrapper = ({
	initialQuery,
}: {
	initialQuery: string
}) => {
	return <BookSearchContent initialQuery={initialQuery} />
}
