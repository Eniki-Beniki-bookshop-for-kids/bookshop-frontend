import { Flex, Link } from "@chakra-ui/react"
import NextLink from "next/link"

import { headerNav } from "@/types/constants"

export const NavBar = () => {
	return (
		<Flex as="nav" gap={6} flex="1" justify="center">
			{headerNav.map(({ href, label }) => (
				<Link as={NextLink} key={href} href={href}>
					{label}
				</Link>
			))}
		</Flex>
	)
}
