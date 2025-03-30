import { Box } from "@chakra-ui/react"
import React, { Component, ReactNode } from "react"
import { ErrorBtn } from "./ErrorBtn"
import { ErrorContent } from "./ErrorContent"

interface ErrorBoundaryProps {
	children: ReactNode
	fallback?: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean
	error: Error | null
}

export class ErrorBoundary extends Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	state: ErrorBoundaryState = {
		hasError: false,
		error: null,
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error }
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error("ErrorBoundary caught an error:", error, errorInfo)
	}

	resetError = () => {
		this.setState({ hasError: false, error: null })
	}

	render() {
		const { hasError, error } = this.state
		const { children, fallback } = this.props

		if (hasError) {
			if (fallback) {
				return fallback
			}

			return (
				<Box padding={5} textAlign="center">
					<ErrorContent error={error} title="Ой, щось пішло не так 😔" />
					<ErrorBtn />
				</Box>
			)
		}

		return children
	}
}
