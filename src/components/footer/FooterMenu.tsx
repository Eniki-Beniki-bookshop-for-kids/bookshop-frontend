import { Link, VStack } from "@chakra-ui/react"
import { FC } from "react"
import { FooterColumnName } from "./FooterColumnName"

interface FooterMenuProps {
	title: string
	menu: { label: string; href: string }[]
}

export const FooterMenu: FC<FooterMenuProps> = ({ title, menu }) => {
	return (
		<VStack align="start" spacing="10px">
			<FooterColumnName title={title} />
			<VStack align="start" spacing="6px">
				{menu.map(item => (
					<Link key={item.href} color="customDarkGray" href={item.href}>
						{item.label}
					</Link>
				))}
			</VStack>
		</VStack>
	)
}
