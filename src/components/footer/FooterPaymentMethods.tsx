//src/components/footer/FooterPaymentMethods.tsx
import { LogoImages } from "@/components"
import { paymentSystems } from "@/types/constants"
import { VStack } from "@chakra-ui/react"
import { FooterColumnName } from "./FooterColumnName"

export const FooterPaymentMethods = () => {
	return (
		<VStack align="start" spacing="10px">
			<FooterColumnName title="Методи оплати" />
			<LogoImages logos={paymentSystems} />
		</VStack>
	)
}
