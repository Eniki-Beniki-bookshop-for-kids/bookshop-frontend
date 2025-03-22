import { Text } from "@chakra-ui/react"

export const FooterColumnName = ({ title }: { title: string }) => {
	return (
		<Text fontSize="20px" fontWeight={600} color="customBlack">
			{title}
		</Text>
	)
}
