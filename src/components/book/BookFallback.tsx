import { noImageSrc, whiteBoxSrc } from "@/types/constants"
import { Image } from "@chakra-ui/react"

interface BookFallbackProps {
	type?: "noImage" | "whiteBox"
}

export const BookFallback = ({ type = "noImage" }: BookFallbackProps) => {
	const fallbackSrc = type === "whiteBox" ? whiteBoxSrc : noImageSrc

	return (
		<Image
			src={fallbackSrc}
			alt="Немає зображення"
			objectFit="cover"
			w="full"
			h="full"
		/>
	)
}
