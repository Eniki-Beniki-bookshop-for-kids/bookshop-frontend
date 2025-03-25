import { GridItem, Heading } from "@chakra-ui/react"

export const HeaderPage = ({ title }: { title: string }) => {
	return (
		<GridItem area="title">
			<Heading as="h1" fontSize={28} fontWeight="400" mb={9}>
				{title}
			</Heading>
		</GridItem>
	)
}
