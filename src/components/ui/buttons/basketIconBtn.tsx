"use client"

import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const BasketIconBtn: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customBlack") || "#0e0e0e",
	size = 22,
	onClick,
}) => {
	return (
		<div
			onClick={onClick}
			className="cursor-pointer transform transition-transform duration-200 hover:scale-110"
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
					d="M3.2 4.12L4.63 4.12C5.27 4.12 5.59 4.12 5.83 4.29C6.07 4.47 6.17 4.77 6.37 5.37L6.87 6.87"
					stroke={getTailwindColor(colorFill) || "#0e0e0e"}
					strokeOpacity="1.000000"
					strokeWidth={1}
					strokeLinecap="round"
				/>
				<path
					id="Vector"
					d="M16.04 16.04L7.37 16.04C7.24 16.04 7.17 16.04 7.12 16.03C7 16.02 6.87 15.98 6.76 15.91C6.65 15.85 6.56 15.76 6.48 15.66C6.41 15.55 6.35 15.43 6.33 15.31C6.3 15.18 6.3 15.05 6.33 14.93C6.35 14.85 6.37 14.77 6.4 14.69C6.45 14.55 6.47 14.48 6.5 14.41C6.63 14.1 6.84 13.83 7.12 13.63C7.39 13.43 7.72 13.32 8.06 13.29C8.12 13.29 8.2 13.29 8.35 13.29L13.29 13.29"
					stroke={getTailwindColor(colorFill) || "#0e0e0e"}
					strokeOpacity="1.000000"
					strokeWidth={1}
					strokeLinejoin="round"
					strokeLinecap="round"
				/>
				<path
					id="Vector"
					d="M10.21 13.29C9.03 13.29 8.45 13.29 7.99 12.98C7.53 12.68 7.3 12.14 6.83 11.06L6.68 10.7C5.94 8.97 5.57 8.11 5.97 7.49C6.38 6.87 7.33 6.87 9.21 6.87L14.05 6.87C16.16 6.87 17.21 6.87 17.61 7.55C18 8.24 17.48 9.15 16.44 10.98L16.18 11.44C15.66 12.34 15.4 12.79 14.98 13.04C14.55 13.29 14.03 13.29 12.99 13.29L10.21 13.29Z"
					stroke={getTailwindColor(colorFill) || "#0e0e0e"}
					strokeOpacity="1.000000"
					strokeWidth={1}
				/>
				<path
					id="Vector"
					d="M16.5 18.33C16.5 18.83 16.08 19.24 15.58 19.24C15.07 19.24 14.66 18.83 14.66 18.33C14.66 17.82 15.07 17.41 15.58 17.41C16.08 17.41 16.5 17.82 16.5 18.33Z"
					fill={getTailwindColor(colorFill) || "#0e0e0e"}
					fillOpacity="1.000000"
					fillRule="evenodd"
				/>
				<path
					id="Vector"
					d="M9.16 18.33C9.16 18.83 8.75 19.24 8.25 19.24C7.74 19.24 7.33 18.83 7.33 18.33C7.33 17.82 7.74 17.41 8.25 17.41C8.75 17.41 9.16 17.82 9.16 18.33Z"
					fill={getTailwindColor(colorFill) || "#0e0e0e"}
					fillOpacity="1.000000"
					fillRule="evenodd"
				/>
			</svg>
		</div>
	)
}
