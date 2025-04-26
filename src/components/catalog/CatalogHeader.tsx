// src/components/catalog/CatalogBtn.tsx

import { Box, HStack, Text } from "@chakra-ui/react"
import Link from "next/link"
import { BookCatalogIcon } from "../ui"

export const CatalogBtn = () => {
	return (
		<Box
			as={Link}
			href="/catalog"
			py={3}
			px={4}
			bg="white"
			borderRadius="30px"
			borderWidth="2px"
			borderColor="customViolet"
			cursor="pointer"
		>
			<HStack spacing={1}>
				<BookCatalogIcon colorFill="customBlack" />
				<Text fontSize="18px">Каталог</Text>
			</HStack>
		</Box>
	)
}
