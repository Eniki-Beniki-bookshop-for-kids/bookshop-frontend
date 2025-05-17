// src/components/book/bookDetails/BookDetailsDeliveryInfo.tsx

import { LogoImages } from "@/components"
import {
	carriers,
	deliveryOptions,
	paymentMethods,
	paymentSystems,
} from "@/types/constants"
import { Box, HStack, Text, VStack } from "@chakra-ui/react"

const Title = ({ title }: { title: string }) => (
	<Box as="h2" fontSize={20} textAlign="start" color="customBlack">
		{title}
	</Box>
)

export const BookDetailsDeliveryInfo = () => {
	return (
		<VStack
			spacing={12}
			p={8}
			fontSize="14px"
			w="full"
			maxW={{ base: "300px", sm: "full" }}
			overflow="auto"
		>
			<VStack spacing={4} align="start" w="full">
				<Title title="Способи доставки" />
				<LogoImages logos={carriers} />

				<VStack spacing={2} w="full">
					{deliveryOptions.map((option, idx) => {
						const { carrier, method, description, shippingCost } = option

						return (
							<HStack key={idx} justifyContent="space-between" w="full">
								<Text>
									{carrier ? `${carrier} ${method}` : method} {description}
								</Text>
								<Text>
									{shippingCost === 0 ? "безкоштовно" : `${shippingCost}₴`}
								</Text>
							</HStack>
						)
					})}
				</VStack>
			</VStack>

			<VStack spacing={4} align="start" w="full">
				<Title title="Способи оплати" />
				<LogoImages logos={paymentSystems} />
				<VStack spacing={2} align="start">
					{paymentMethods.map((method, idx) => (
						<Text key={idx}>{method}</Text>
					))}
				</VStack>
			</VStack>
		</VStack>
	)
}
