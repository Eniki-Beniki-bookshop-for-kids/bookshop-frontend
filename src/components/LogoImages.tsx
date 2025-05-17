//src/components/PaymentImages.tsx
import { ImageLinkProps } from "@/types/propsInterfaces"
import { HStack, Image } from "@chakra-ui/react"

interface LogoImagesProps {
	logos: ImageLinkProps[]
	height?: string
}

export const LogoImages = ({ logos, height = "24px" }: LogoImagesProps) => {
	return (
		<HStack spacing={4}>
			{logos.map((logo: ImageLinkProps) => (
				<Image
					key={logo.src}
					src={logo.src}
					alt={logo.alt}
					height={height}
					width="auto"
				/>
			))}
		</HStack>
	)
}
