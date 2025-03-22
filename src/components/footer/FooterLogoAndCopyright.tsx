import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { FC } from "react"

export const FooterLogoAndCopyright: FC = () => {
	return (
		<Flex align="end" justify="space-between" mt="50px">
			<Box flex="1" display="flex" justifyContent="center">
				<Image
					src="/images/LOGO_v3.png"
					alt="Еники-Беники"
					height="52px"
					objectFit="contain"
				/>
			</Box>
			<Text color="customDarkGray" whiteSpace="nowrap">
				© Eniki-beniki.ua 2025. Всі права захищені.
			</Text>
		</Flex>
	)
}
