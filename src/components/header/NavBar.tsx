"use client"

import { Flex, Link } from "@chakra-ui/react"
import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { headerNav } from "@/types/constants"

export const NavBar = () => {
	const pathname = usePathname()
	const [hash, setHash] = useState("") // Стан для якірного посилання

	// Оновлюємо hash при зміні window.location
	useEffect(() => {
		setHash(window.location.hash)
		const handleHashChange = () => setHash(window.location.hash)
		window.addEventListener("hashchange", handleHashChange)
		return () => window.removeEventListener("hashchange", handleHashChange)
	}, [])

	return (
		<Flex as="nav" gap={6} flex="1" justify="center">
			{headerNav.map(({ href, label }) => {
				let isActive = false
				if (href === "/") {
					isActive = pathname === "/" && hash === ""
				} else if (href.startsWith("/#")) {
					isActive = pathname === "/" && href === `${pathname}${hash}`
				} else {
					isActive = pathname === href || pathname.startsWith(href)
				}

				return (
					<Link
						as={NextLink}
						key={href}
						href={href}
						color={isActive ? "customViolet" : "inherit"}
						fontWeight={isActive ? 600 : 400}
						_hover={{
							color: "customViolet",
							transform: "scale(1.05)",
							transition: "transform 0.2s ease-in-out",
						}}
					>
						{label}
					</Link>
				)
			})}
		</Flex>
	)
}
