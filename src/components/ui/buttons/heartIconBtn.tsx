"use client"

import { getTailwindColor } from "@/utils"
import { FC, useState } from "react"

interface HeartIconBtnProps {
	colorFill?: string
	colorStroke?: string
	size?: number
	isStatic?: boolean
	onToggle?: (isFavoriteOn: boolean) => void
}

export const HeartIconBtn: FC<HeartIconBtnProps> = ({
	colorFill = getTailwindColor("customViolet") || "#8748FF",
	colorStroke = getTailwindColor("customLavender") || "rgba(135, 72, 255, 0.5)",
	size = 32,
	isStatic = false,
	onToggle,
}) => {
	const [filled, setFilled] = useState(false)

	const handleClick = () => {
		setFilled(!filled)

		if (onToggle) {
			onToggle(!filled)
		}
	}

	return (
		<div
			onClick={handleClick}
			className={`inline-block ${
				!isStatic
					? "cursor-pointer transform transition-transform duration-200 hover:scale-110"
					: ""
			}`}
		>
			<svg
				width={size}
				height={size}
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<clipPath id="clip4_496">
						<rect
							id="ph:heart-fill"
							rx="0.000000"
							width={size}
							height={size}
							transform="translate(0.500000 0.500000)"
							fill="transparent"
							fillOpacity="0"
						/>
					</clipPath>
				</defs>
				<rect
					id="Property 1=Default"
					rx="0.000000"
					width={size}
					height={size}
					transform="translate(0.500000 0.500000)"
					fill="transparent"
					fillOpacity="0"
				/>
				<rect
					id="ph:heart-fill"
					rx="0.000000"
					width={size}
					height={size}
					transform="translate(0.500000 0.500000)"
					fill="transparent"
					fillOpacity="0"
				/>
				<g clipPath="url(#clip4_496)">
					<path
						id="Vector"
						d="M30 12.75C30 21.5 17.02 28.58 16.47 28.87C16.32 28.95 16.16 28.99 16 28.99C15.83 28.99 15.67 28.95 15.52 28.87C14.97 28.58 2 21.5 2 12.75C2 10.69 2.81 8.72 4.27 7.27C5.72 5.81 7.69 5 9.75 5C12.33 5 14.59 6.11 16 7.98C17.4 6.11 19.66 5 22.25 5C24.3 5 26.27 5.81 27.72 7.27C29.18 8.72 29.99 10.69 30 12.75Z"
						fill={
							filled && colorFill
								? getTailwindColor(colorFill) || "#8748FF"
								: "transparent"
						}
						fillOpacity="0.500000"
						fillRule="nonzero"
					/>
					<path
						id="Vector"
						d="M15.33 7.21C13.92 5.8 11.95 5 9.75 5C7.69 5 5.72 5.81 4.27 7.27C2.81 8.72 2 10.69 2 12.75C2 21.5 14.97 28.58 15.52 28.87C15.67 28.95 15.83 28.99 16 28.99C16.16 28.99 16.32 28.95 16.47 28.87C17.02 28.58 30 21.5 30 12.75C29.99 10.69 29.18 8.72 27.72 7.27C26.27 5.81 24.3 5 22.25 5C20.04 5 18.07 5.8 16.66 7.21C16.42 7.45 16.2 7.71 16 7.98C15.79 7.71 15.57 7.45 15.33 7.21ZM22.78 23.23Q19.4 26.19 16 27.99L16 27.99Q12.59 26.19 9.21 23.23Q3 17.78 3 12.75Q3 11.35 3.49 10.16Q3.99 8.96 4.97 7.97Q5.96 6.99 7.16 6.49Q8.35 6 9.75 6Q11.85 6 13.39 6.93Q14.42 7.55 15.2 8.58L16 9.65L16.79 8.58Q17.57 7.55 18.59 6.93Q20.14 6 22.25 6Q23.64 6 24.83 6.49Q26.03 6.98 27.02 7.97Q28 8.96 28.5 10.16Q28.99 11.35 29 12.75Q29 17.78 22.78 23.23Z"
						fill={
							colorStroke
								? getTailwindColor(colorStroke) || "rgba(135, 72, 255, 0.5)"
								: "rgba(135, 72, 255, 0.5)"
						}
						fillOpacity="1.000000"
						fillRule="evenodd"
					/>
				</g>
			</svg>
		</div>
	)
}
