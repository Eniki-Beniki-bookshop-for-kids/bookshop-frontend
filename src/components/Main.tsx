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
			px={{ md: "20px", lg: "80px" }}
			bg="customWhite"
		>
			<Breadcrumbs />
			{children}
		</Box>
	)
}
