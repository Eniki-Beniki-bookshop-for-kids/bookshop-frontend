import { Box, Heading, Text } from "@chakra-ui/react"

export const OrdersContent = () => {
	return (
		<Box>
			<Heading as="h2" size="md" mb={6}>
				Замовлення
			</Heading>
			<Text>Тут буде список ваших замовлень.</Text>
		</Box>
	)
}
