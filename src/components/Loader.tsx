// src/components/Loader.tsx
"use client"

import { Box } from "@chakra-ui/react"
import { JellyTriangle, Metronome } from "ldrs/react"
import "ldrs/react/JellyTriangle.css"
import "ldrs/react/Metronome.css"
import { getTailwindColor } from "@/utils"

interface LoaderProps {
	isLoading: boolean
	variant?: "jelly" | "metronome"
	size?: string
	speed?: string
	color?: string
}

export const Loader = ({
	isLoading,
	variant = "jelly",
	size = "40",
	speed = "1.7",
	color = getTailwindColor("customViolet") || "#8748FF",
}: LoaderProps) => {
	if (!isLoading) return null

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100px"
		>
			{variant === "jelly" ? (
				<JellyTriangle size={size} speed={speed} color={color} />
			) : (
				<Metronome size={size} speed={speed} color={color} />
			)}
		</Box>
	)
}
