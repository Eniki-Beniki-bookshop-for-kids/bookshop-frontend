import { Heading, Text } from "@chakra-ui/react"
import { FC } from "react"

export interface ErrorContentProps {
	error?: Error | null
	title: string
}

export const ErrorContent: FC<ErrorContentProps> = ({ error, title }) => {
	return (
		<>
			<Heading as="h2" mb={4}>
				{title}
			</Heading>
			<Text fontSize="20px" color="customGray" mb={4}>
				{error && `Деталі: ${error?.message || "Невідома помилка"}`}
				{!error && "Такої сторінки не існує."}
			</Text>
		</>
	)
}
