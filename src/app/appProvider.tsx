"use client"

import { ChakraProvider, Flex } from "@chakra-ui/react"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import theme from "../chakraTheme"
import { Footer, Header, Main } from "../components"
import { ModalProvider } from "../context/ModalContext"
import { AppModals } from "./appModals"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * 60 * 1000, // Дані вважаються свіжими 5 хвилин
			gcTime: 10 * 60 * 1000, // Дані зберігаються в кеші 10 хвилин
			retry: 1, // Повторювати запит 1 раз у разі помилки
		},
	},
})

export default function AppProvider({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<QueryClientProvider client={queryClient}>
			<GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
				<ChakraProvider theme={theme}>
					<ModalProvider>
						<Flex direction="column" minHeight="100vh">
							<Header />
							<Main>{children}</Main>
							<Footer />
							<AppModals />
						</Flex>
					</ModalProvider>
				</ChakraProvider>
			</GoogleOAuthProvider>
		</QueryClientProvider>
	)
}
