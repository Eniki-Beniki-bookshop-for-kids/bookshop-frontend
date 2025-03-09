"use client"

import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const CloseIconBtn: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customBlack") || "#0e0e0e",
	size = 22,
	onClick,
}) => {
	return (
		<div
			onClick={onClick}
			className="cursor-pointer transform transition-transform duration-200 hover:rotate-90 hover:scale-110"
		>
			<svg
				width={size}
				height={size}
				viewBox="0 0 22 22"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="Vector"
					d="M6.41 6.41L15.58 15.58M6.41 15.58L15.58 6.41"
					stroke={getTailwindColor(colorFill) || "#0e0e0e"}
					strokeOpacity="1.000000"
					strokeWidth="1.500000"
					strokeLinejoin="round"
					strokeLinecap="round"
				/>
			</svg>
		</div>
	)
}
