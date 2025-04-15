//src/components/footer/FooterSocialMedia.tsx
import { footerSocialMedia } from "@/types/constants"
import { HStack, Image, Link, VStack } from "@chakra-ui/react"
import { FooterColumnName } from "./FooterColumnName"

export const FooterSocialMedia = () => {
	return (
		<VStack align="start" spacing="10px">
			<FooterColumnName title="Ми в соцмережах" />
			<HStack spacing="10px">
				{footerSocialMedia.map(social => (
					<Link key={social.src} href={social.href} _hover={{ opacity: 0.8 }}>
						<Image src={social.src} alt={social.alt} boxSize="32px" />
					</Link>
				))}
			</HStack>
		</VStack>
	)
}
