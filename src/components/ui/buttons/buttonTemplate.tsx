"use client"

import {
	Button as ChakraButton,
	ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react"
import { ReactNode } from "react"

interface CustomButtonProps extends Omit<ChakraButtonProps, "variant"> {
	iconBefore?: ReactNode
	iconAfter?: ReactNode
	bgColor?: string
	textColor?: string
	strokeColor?: string
	hoverBg?: string
	hoverBorderColor?: string
	padding?: string
	width?: string
	fontSize?: string
	borderRadius?: string
	onClick?: () => void
}

export const ButtonTemplate = ({
	iconBefore,
	iconAfter,
	bgColor = "customViolet",
	textColor = "#FFF",
	strokeColor,
	hoverBg = "customLavender",
	hoverBorderColor,
	padding = "12px",
	width = "auto",
	fontSize = "16px",
	borderRadius = "30px",
	onClick,
	children,
	...props
}: CustomButtonProps) => {
	return (
		<ChakraButton
			width={width}
			fontSize={fontSize}
			borderRadius={borderRadius}
			backgroundColor={bgColor}
			color={textColor}
			border={strokeColor ? "2px solid" : "none"}
			borderColor={strokeColor || "transparent"}
			padding={padding}
			_hover={{
				backgroundColor: hoverBg,
				borderColor: hoverBorderColor || "transparent",
				color: textColor,
			}}
			onClick={onClick}
			{...props}
		>
			{iconBefore && <span className="mr-2">{iconBefore}</span>}
			{children}
			{iconAfter && <span className="ml-2">{iconAfter}</span>}
		</ChakraButton>
	)
}
