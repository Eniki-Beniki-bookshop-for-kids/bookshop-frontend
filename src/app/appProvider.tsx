"use client"

import { ChakraProvider } from "@chakra-ui/react"
import theme from "../chakraTheme"
import { Footer, Header } from "../components"
import Container from "../components/container"
import Test_UI from "../components/Test_UI"

export default function AppProvider({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ChakraProvider theme={theme}>
			<Header />
			<Container>{children}</Container>
			<Footer />
			<Test_UI />
		</ChakraProvider>
	)
}
