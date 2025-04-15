//	src/components/errorBoundary/ErrorBtn.tsx
"use client"

import { Button } from "@chakra-ui/react"

export const ErrorBtn = () => {
	return (
		<Button
			colorScheme="yellow"
			color="customGray"
			onClick={() => (window.location.href = "/")}
		>
			Повернутися на головну
		</Button>
	)
}
