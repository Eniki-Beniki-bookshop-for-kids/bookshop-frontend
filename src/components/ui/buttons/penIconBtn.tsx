"use client"

import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const PenIconBtn: FC<IButtonProps> = ({
	color = getTailwindColor("customDarkGray") || "#2e2e2e",
	size = 22,
	isStatic = false,
	onClick,
}) => {
	return (
		<div
			onClick={onClick}
			className={`inline-block ${
				!isStatic
					? "cursor-pointer transform transition-transform duration-200 hover:scale-110"
					: ""
			}`}
		>
			<svg
				width={size}
				height={size}
				viewBox="0 0 22 22"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<clipPath id="clip126_4656">
						<rect
							id="solar:penOutline"
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
					id="solar:penOutline"
					rx="0.000000"
					width={size}
					height={size}
					transform="translate(0.500000 0.500000)"
					fill="transparent"
					fillOpacity="0"
				/>
				<g clipPath="url(#clip126_4656)">
					<path
						id="Vector"
						d="M13.52 2.4C14.33 1.59 15.42 1.14 16.56 1.14C17.7 1.14 18.79 1.59 19.59 2.4C20.4 3.2 20.85 4.29 20.85 5.43C20.85 6.57 20.4 7.66 19.59 8.47L10.9 17.16C10.4 17.66 10.11 17.95 9.78 18.21C9.4 18.51 8.99 18.76 8.54 18.97C8.17 19.15 7.78 19.28 7.11 19.5L4.06 20.52L3.33 20.76C3.03 20.86 2.72 20.88 2.42 20.81C2.12 20.73 1.84 20.58 1.63 20.36C1.41 20.15 1.26 19.87 1.19 19.57C1.11 19.27 1.13 18.96 1.23 18.66L2.49 14.88C2.71 14.21 2.84 13.82 3.02 13.44C3.23 13 3.48 12.59 3.78 12.21C4.04 11.88 4.33 11.59 4.83 11.09L13.52 2.4ZM4.03 19.08L6.63 18.21C7.36 17.97 7.67 17.87 7.95 17.73C8.3 17.56 8.63 17.36 8.94 17.12C9.19 16.93 9.42 16.7 9.96 16.16L16.9 9.22C15.95 8.88 15.08 8.33 14.37 7.62C13.66 6.91 13.11 6.04 12.77 5.09L5.83 12.03C5.29 12.57 5.06 12.8 4.87 13.05C4.63 13.36 4.43 13.69 4.26 14.04C4.12 14.32 4.02 14.63 3.78 15.36L2.91 17.96L4.03 19.08ZM13.89 3.98C13.92 4.14 13.97 4.35 14.06 4.61C14.33 5.38 14.77 6.07 15.34 6.65C15.92 7.22 16.61 7.66 17.38 7.93C17.63 8.02 17.85 8.07 18.01 8.1L18.62 7.5C19.16 6.95 19.47 6.21 19.47 5.43C19.47 4.66 19.16 3.92 18.61 3.38C18.07 2.83 17.33 2.52 16.56 2.52C15.78 2.52 15.04 2.83 14.49 3.37L13.89 3.98Z"
						fill={getTailwindColor(color) || "#2e2e2e"}
						fillOpacity="1.000000"
						fillRule="evenodd"
					/>
				</g>
			</svg>
		</div>
	)
}
