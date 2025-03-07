"use client"

import { IButtonClickProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const CloseIconBtn: FC<IButtonClickProps> = ({
	color = getTailwindColor("customBlack") || "#0e0e0e",
	size = 22,
	onClick,
}) => {
	return (
		<div
			onClick={onClick}
			className="inline-block cursor-pointer transform transition-transform duration-200 hover:rotate-90 hover:scale-110"
		>
			<svg
				width={size}
				height={size}
				viewBox="0 0 22 22"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<clipPath id="clip98_6907">
						<rect
							id="iconamoon:closeLight"
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
					id="iconamoon:closeLight"
					rx="0.000000"
					width={size}
					height={size}
					transform="translate(0.500000 0.500000)"
					fill="transparent"
					fillOpacity="0"
				/>
				<g clipPath="url(#clip98_6907)">
					<path
						id="Vector"
						d="M6.41 6.41L15.58 15.58M6.41 15.58L15.58 6.41"
						stroke={getTailwindColor(color) || "#0e0e0e"}
						strokeOpacity="1.000000"
						strokeWidth="1.500000"
						strokeLinejoin="round"
						strokeLinecap="round"
					/>
				</g>
			</svg>
		</div>
	)
}
