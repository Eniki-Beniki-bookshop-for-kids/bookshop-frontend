"use client"

import { ChakraProvider } from "@chakra-ui/react"
import theme from "../chakraTheme"
import Container from "../components/container"

export default function AppProvider({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ChakraProvider theme={theme}>
			<header>Header</header>
			<Container>{children}</Container>
			<footer>Footer</footer>
		</ChakraProvider>
	)
}
