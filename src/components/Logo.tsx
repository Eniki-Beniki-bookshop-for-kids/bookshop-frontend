//src/components/header/Logo.tsx
import { Box, Image, Link } from "@chakra-ui/react"
import NextLink from "next/link"
import { FC } from "react"

interface LogoProps {
	bg?: string
	borderRadius?: string
}

export const Logo: FC<LogoProps> = ({
	bg = "customWhite",
	borderRadius = "50%",
}) => {
	return (
		<Link
			as={NextLink}
			href="/"
			_hover={{
				transform: "scale(1.1)",
				transition: "transform 0.2s ease-in-out",
			}}
		>
			<Box bg={bg} borderRadius={borderRadius} display="inline-block" p={2}>
				<Image
					src="/images/LOGO_v1.png"
					alt="Логотип"
					width="112px"
					minW={100}
					objectFit="contain"
				/>
			</Box>
		</Link>
	)
}
