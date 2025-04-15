//src/components/footer/FooterLogoAndCopyright.tsx
import { Box, Flex, Text } from "@chakra-ui/react"
import { FC } from "react"
import { Logo } from "../Logo"

export const FooterLogoAndCopyright: FC = () => {
	return (
		<Flex align="end" justify="space-between" mt="50px">
			<Box flex="1" display="flex" justifyContent="center">
				<Logo bg="transparent" />
			</Box>
			<Text color="customDarkGray" whiteSpace="nowrap">
				© Eniki-beniki.ua 2025. Всі права захищені.
			</Text>
		</Flex>
	)
}
