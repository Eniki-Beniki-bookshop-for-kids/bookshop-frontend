"use client"

import {
	Button as ChakraButton,
	ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react"
import Link from "next/link"
import { ReactNode } from "react"

interface CustomButtonProps extends ChakraButtonProps {
	iconBefore?: ReactNode
	iconAfter?: ReactNode
	bgColor?: string
	textColor?: string
	padding?: string
	width?: string
	fontSize?: string
	borderRadius?: string
	hoverScale?: number
	onClick?: () => void
	href?: string
}

export const ButtonTemplate = ({
	iconBefore,
	iconAfter,
	bgColor = "customViolet",
	textColor = "#FFF",
	padding = "12px",
	width = "auto",
	fontSize = "16px",
	borderRadius = "30px",
	hoverScale = 1,
	onClick,
	href,
	children,
	...props
}: CustomButtonProps) => {
	const buttonContent = (
		<ChakraButton
			width={width}
			fontSize={fontSize}
			borderRadius={borderRadius}
			backgroundColor={bgColor}
			color={textColor}
			padding={padding}
			transition="transform 0.2s ease-in-out"
			_hover={{
				transform: `scale(${hoverScale})`,
			}}
			alignItems="center"
			onClick={onClick}
			{...props}
		>
			{iconBefore && <span className="mr-2">{iconBefore}</span>}
			{children}
			{iconAfter && <span className="ml-2">{iconAfter}</span>}
		</ChakraButton>
	)

	return href ? <Link href={href}>{buttonContent}</Link> : buttonContent
}
