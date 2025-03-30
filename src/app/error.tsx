"use client"

import { Box } from "@chakra-ui/react"
import { useEffect } from "react"
import { ErrorBtn, ErrorContent } from "../components/errorBoundary"

interface ErrorPageProps {
	error: Error & { digest?: string }
}

const ErrorPage = ({ error }: ErrorPageProps) => {
	useEffect(() => {
		console.error("Error caught in error.tsx:", error, error.digest)
	}, [error])

	return (
		<Box padding={5} textAlign="center">
			<ErrorContent error={error} title="Ой, щось пішло не так 😔" />
			<ErrorBtn />
		</Box>
	)
}

export default ErrorPage
