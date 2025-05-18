// src/components/book/BookPrice.tsx
import { adaptiveFontSize } from "@/types/constants"
import { Book } from "@/types/models"
import { HStack, Text } from "@chakra-ui/react"

interface BookPriceProps {
	price: Book["price"]
	discount: Book["discount"]
	fontSize?: number
}

export const BookPrice = ({
	price,
	discount,
	fontSize = 20,
}: BookPriceProps) => {
	const hasDiscount = discount > 0
	const discountedPrice = hasDiscount
		? Math.round(price * (1 - discount))
		: price

	return (
		<HStack
			spacing={2}
			color="customDarkGray"
			fontSize={adaptiveFontSize(fontSize)}
		>
			{hasDiscount ? (
				<>
					<Text
						as="span"
						color="customGray"
						textDecoration="line-through"
						whiteSpace="nowrap"
					>
						{price} ₴
					</Text>
					<Text as="span" fontWeight="bold" whiteSpace="nowrap">
						{discountedPrice} ₴
					</Text>
				</>
			) : (
				<Text as="span" whiteSpace="nowrap">
					{price} ₴
				</Text>
			)}
		</HStack>
	)
}
