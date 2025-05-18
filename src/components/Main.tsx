//src/components/Main.tsx
import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"
import { Breadcrumbs } from "./Breadcrumbs"

export const Main = ({ children }: { children: ReactNode }) => {
	return (
		<Box
			as="main"
			flex={1}
			w="full"
			pb={3}
			px={{ base: 4, sm: 4, md: 5, lg: 10 }}
			bg="customWhite"
		>
			<Breadcrumbs />
			{children}
		</Box>
	)
}
