// src/app/catalog/page.tsx
import { PageTitle } from "@/components"
import { CatalogContent } from "@/components/catalog"
import { Box } from "@chakra-ui/react"

export default function CatalogPage() {
	return (
		<Box pb={12}>
			<PageTitle title="Каталог" />
			<CatalogContent />
		</Box>
	)
}
