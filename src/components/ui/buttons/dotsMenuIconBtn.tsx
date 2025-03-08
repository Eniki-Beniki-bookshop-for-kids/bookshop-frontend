"use client"

import { getTailwindColor } from "@/utils"
import { FC, useState } from "react"
import { IButtonProps } from "../../../types/propsInterfaces"

interface DotsMenuIconBtnProps extends IButtonProps {
	colorClose?: string
	colorOpen?: string
	onClickOpen?: (isOpen: boolean) => void
}

export const DotsMenuIconBtn: FC<DotsMenuIconBtnProps> = ({
	colorClose = getTailwindColor("customGreen") || "#2e2e2e",
	colorOpen = getTailwindColor("customViolet") || "#8748FF",
	size = 30,
	onClickOpen,
}) => {
	const [opened, setOpened] = useState(false)

	const handleClick = () => {
		setOpened(!opened)

		if (onClickOpen) {
			onClickOpen(!opened)
		}
	}

	return (
		<div
			onClick={handleClick}
			className="inline-block cursor-pointer transform transition-transform duration-200 hover:scale-110"
		>
			<svg
				width={size}
				height={size}
				viewBox="0 0 30 30"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<clipPath id="clip107_3064">
						<rect
							id="Property 1=Default"
							rx="14.500000"
							width={size}
							height={size}
							transform="translate(0.500000 0.500000)"
							fill="#FFF"
							fillOpacity="0"
						/>
					</clipPath>
				</defs>
				<rect
					id="Property 1=Default"
					rx="14.500000"
					width={size}
					height={size}
					transform="translate(0.500000 0.500000)"
					fill="#FFF"
					fillOpacity="1.000000"
				/>
				<g clipPath="url(#clip107_3064)">
					{[10, 15, 20].map((cy, index) => (
						<circle
							key={index}
							cx="15"
							cy={cy}
							r="1.5"
							fill={
								opened
									? getTailwindColor(colorOpen) ?? "#8748FF"
									: getTailwindColor(colorClose) ?? "#2e2e2e"
							}
							fillOpacity="1"
						/>
					))}
				</g>
			</svg>
		</div>
	)
}
