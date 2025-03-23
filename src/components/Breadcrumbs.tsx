"use client"

import { useBreadcrumbs } from "@/hooks/useBreadcrumbs"
import { Box, Link, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import { FC } from "react"

export const Breadcrumbs: FC = () => {
	const { breadcrumbs } = useBreadcrumbs()

	if (breadcrumbs.length === 0) {
		return null
	}

	return (
		<Box py={2} mt={5} mb={10}>
			{breadcrumbs.map((item, index) => (
				<Text key={item.href} as="span" display="inline">
					{index > 0 && (
						<Text as="span" color="customBlack" px={2}>
							{">"}
						</Text>
					)}
					{item.isCurrent ? (
						<Text as="span" color="customLightGray">
							{item.label}
						</Text>
					) : (
						<Link
							as={NextLink}
							href={item.href}
							color="customBlack"
							_hover={{ textDecoration: "underline" }}
						>
							{item.label}
						</Link>
					)}
				</Text>
			))}
		</Box>
	)
}
