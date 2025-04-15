//src/components/footer/Footer.tsx

import { Box, Flex, VStack } from "@chakra-ui/react"
import { footerForBuyers, footerMenu } from "../../types/constants"
import { FooterContacts } from "./FooterContacts"
import { FooterLogoAndCopyright } from "./FooterLogoAndCopyright"
import { FooterMenu } from "./FooterMenu"
import { FooterPaymentMethods } from "./FooterPaymentMethods"
import { FooterSocialMedia } from "./FooterSocialMedia"

export const Footer = () => {
	return (
		<Box as="footer" bg="#FFF" py={20} px={{ base: "20px", md: "80px" }}>
			<Flex
				direction={{ base: "column", md: "row" }}
				justify="space-between"
				gap={{ base: 8, md: 0 }}
			>
				<FooterMenu title="Меню" menu={footerMenu} />
				<FooterMenu title="Покупцям" menu={footerForBuyers} />
				<FooterContacts />
				<VStack align="start" spacing={10}>
					<FooterPaymentMethods />
					<FooterSocialMedia />
				</VStack>
			</Flex>
			<FooterLogoAndCopyright />
		</Box>
	)
}
