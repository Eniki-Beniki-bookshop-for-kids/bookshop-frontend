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
			<header className="flex justify-center text-4xl font-medium py-4">
				Тут буде Header
			</header>
			<Container>{children}</Container>
			<footer className="flex justify-center text-4xl font-medium py-4">
				Тут буде Footer
			</footer>
		</ChakraProvider>
	)
}
