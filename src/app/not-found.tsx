"use client"

import { Box } from "@chakra-ui/react"
import { ErrorBtn, ErrorContent } from "../components/errorBoundary"

const NotFoundPage = () => {
	return (
		<Box padding={5} textAlign="center">
			<ErrorContent title="404 - Сторінка не знайдена 😔" />
			<ErrorBtn />
		</Box>
	)
}

export default NotFoundPage
