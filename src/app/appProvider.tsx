"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { GoogleOAuthProvider } from "@react-oauth/google"
import theme from "../chakraTheme"
import { Footer, Header, Main } from "../components"
import { ModalProvider } from "../context/ModalContext"
import { AppModals } from "./appModals"
// import Test_UI from "../components/Test_UI"

export default function AppProvider({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
			<ChakraProvider theme={theme}>
				<ModalProvider>
					<div>
						<Header />
						<Main>{children}</Main>
						<Footer />
						<AppModals />
						{/* <Test_UI /> */}
					</div>
				</ModalProvider>
			</ChakraProvider>
		</GoogleOAuthProvider>
	)
}
