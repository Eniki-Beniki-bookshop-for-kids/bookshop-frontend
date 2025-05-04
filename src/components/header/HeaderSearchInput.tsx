// src/components/header/HeaderSearchInput.tsx
"use client"

import { useBookSearch } from "@/hooks"
import { Box } from "@chakra-ui/react"
import { CustomInputTemplate } from "../ui"

export const HeaderSearchInput = () => {
	const { query, handleSearch, handleSearchSubmit, errorMessage } =
		useBookSearch({
			searchField: "titleAuthor",
		})

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearchSubmit()
		}
	}

	return (
		<Box width="100%" maxW="40%">
			<CustomInputTemplate
				type="text"
				placeholder="Пошук за назвою книги або автором"
				value={query}
				onChange={e => handleSearch(e.target.value)}
				onKeyDown={handleKeyDown}
				pr="18px"
				isSearch={true}
				error={errorMessage ?? undefined}
			/>
		</Box>
	)
}
