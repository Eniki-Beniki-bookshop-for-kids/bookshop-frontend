//src/components/header/Logo.tsx
import { Box, Image, Link } from "@chakra-ui/react"
import NextLink from "next/link"

export const Logo = () => {
	return (
		<Link
			as={NextLink}
			href="/"
			_hover={{
				transform: "scale(1.1)",
				transition: "transform 0.2s ease-in-out",
			}}
		>
			<Box bg="customWhite" borderRadius="50%" p={2} display="inline-block">
				<Image
					src="/images/LOGO_v1.png"
					alt="Логотип"
					width="150px"
					minW={100}
					objectFit="contain"
				/>
			</Box>
		</Link>
	)
}
