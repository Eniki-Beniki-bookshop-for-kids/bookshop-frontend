import { footerPaymentMethods } from "@/types/constants"
import { HStack, Image, VStack } from "@chakra-ui/react"
import { FooterColumnName } from "./FooterColumnName"

export const FooterPaymentMethods = () => {
	return (
		<VStack align="start" spacing="10px">
			<FooterColumnName title="Методи оплати" />
			<HStack spacing="15px">
				{footerPaymentMethods.map(method => (
					<Image
						key={method.src}
						src={method.src}
						alt={method.alt}
						height={6}
						width="auto"
					/>
				))}
			</HStack>
		</VStack>
	)
}
