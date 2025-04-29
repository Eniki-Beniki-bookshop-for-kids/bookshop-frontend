import { InputLeftElement } from "@chakra-ui/react"
import { FC } from "react"
import { SearchIcon } from ".."

export const InputSearch: FC = () => (
	<InputLeftElement
		height="100%"
		display="flex"
		alignItems="center"
		left="20px"
	>
		<SearchIcon />
	</InputLeftElement>
)
