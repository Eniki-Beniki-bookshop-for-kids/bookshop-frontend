//src/components/footer/FooterContacts.tsx
import { footerContacts } from "@/types/constants"
import { HStack, Link, Text, VStack } from "@chakra-ui/react"
import { FC } from "react"
import { EmailIcon } from "../ui"
import { FooterColumnName } from "./FooterColumnName"

export const FooterContacts: FC = () => {
	return (
		<VStack id="contacts" align="start" spacing="10px" scrollMarginTop="258px">
			<FooterColumnName title="Контакти" />
			<VStack align="start" spacing={1}>
				{footerContacts.map(contact =>
					contact.isEmail ? (
						<HStack key={contact.label} spacing={1}>
							<EmailIcon />
							<Link
								href={`mailto:${contact.label}`}
								color="customDarkGray"
								_hover={{ textDecoration: "underline" }}
							>
								{contact.label}
							</Link>
						</HStack>
					) : (
						<Text key={contact.label} color="customDarkGray">
							{contact.label}
						</Text>
					),
				)}
			</VStack>
		</VStack>
	)
}
