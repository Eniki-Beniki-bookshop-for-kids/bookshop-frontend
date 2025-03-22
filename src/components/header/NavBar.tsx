"use client"

import { useHashScroll } from "@/hooks"
import { headerNav } from "@/types/constants"
import { Flex } from "@chakra-ui/react"
import { NavLink } from "./NavLink"

export const NavBar = () => {
	const { hash } = useHashScroll()

	return (
		<Flex as="nav" gap={6} flex="1" justify="center">
			{headerNav.map(({ href, label }) => {
				const isActive =
					(href === "/" && hash === "") ||
					(href.startsWith("/#") && href === `/${hash}`) ||
					hash === href ||
					hash.startsWith(href)

				return (
					<NavLink key={href} href={href} label={label} isActive={isActive} />
				)
			})}
		</Flex>
	)
}
