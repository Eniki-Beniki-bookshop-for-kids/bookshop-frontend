"use client"

import { ChakraProvider } from "@chakra-ui/react"
import theme from "../chakraTheme"
import { Container, Footer, Header } from "../components"
// import Test_UI from "../components/Test_UI"

export default function AppProvider({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ChakraProvider theme={theme}>
			<div>
				<Header />
				<Container>{children}</Container>
				<Footer />
				{/* <Test_UI /> */}
			</div>
		</ChakraProvider>
	)
}
