import { GridItem, Heading } from "@chakra-ui/react"

export const PageTitle = ({
	title,
	mb = 9,
}: {
	title: string
	mb?: number
}) => {
	return (
		<GridItem area="title">
			<Heading as="h1" fontSize={28} fontWeight="400" mb={mb}>
				{title}
			</Heading>
		</GridItem>
	)
}
