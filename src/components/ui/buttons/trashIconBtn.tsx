"use client"

import { getTailwindColor } from "@/utils"
import { FC } from "react"
import { IButtonProps } from "../../../types/propsInterfaces"

export const TrashIconBtn: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customDarkGray") || "#2e2e2e",
	size = 16,
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
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<clipPath id="clip107_3053">
						<rect
							id="fluent:trash-20-regular"
							rx="0.000000"
							width={size}
							height={size}
							transform="translate(0.500000 0.500000)"
							fill="white"
							fillOpacity="0"
						/>
					</clipPath>
				</defs>
				<rect
					id="fluent:trash-20-regular"
					rx="0.000000"
					width={size}
					height={size}
					transform="translate(0.500000 0.500000)"
					fill="transparent"
					fillOpacity="0"
				/>
				<g clipPath="url(#clip107_3053)">
					<path
						id="Vector"
						d="M6.79 3.2L9.19 3.2C9.19 2.88 9.07 2.57 8.84 2.35C8.62 2.12 8.31 2 8 2C7.68 2 7.37 2.12 7.15 2.35C6.92 2.57 6.79 2.88 6.79 3.2ZM6 3.2C6 2.66 6.2 2.16 6.58 1.78C6.96 1.41 7.46 1.2 8 1.2C8.53 1.2 9.03 1.41 9.41 1.78C9.78 2.16 10 2.66 10 3.2L14 3.2C14.1 3.2 14.2 3.24 14.28 3.31C14.35 3.39 14.39 3.49 14.39 3.59C14.39 3.7 14.35 3.8 14.28 3.88C14.2 3.95 14.1 4 14 4L13.15 4L12.2 12.27C12.13 12.86 11.85 13.39 11.41 13.79C10.97 14.18 10.4 14.4 9.81 14.4L6.18 14.4C5.59 14.4 5.02 14.18 4.58 13.79C4.14 13.39 3.86 12.86 3.79 12.27L2.84 4L2 4C1.89 4 1.79 3.95 1.71 3.88C1.64 3.8 1.59 3.7 1.59 3.59C1.59 3.49 1.64 3.39 1.71 3.31C1.79 3.24 1.89 3.2 2 3.2L6 3.2ZM4.59 12.18C4.63 12.57 4.82 12.93 5.11 13.19C5.41 13.45 5.78 13.6 6.18 13.6L9.81 13.6C10.21 13.6 10.58 13.45 10.88 13.19C11.17 12.93 11.36 12.57 11.4 12.18L12.35 4L3.64 4L4.59 12.18ZM6.79 6C6.9 6 7 6.04 7.08 6.11C7.15 6.19 7.19 6.29 7.19 6.39L7.19 11.2C7.19 11.3 7.15 11.4 7.08 11.48C7 11.55 6.9 11.6 6.79 11.6C6.69 11.6 6.59 11.55 6.51 11.48C6.44 11.4 6.39 11.3 6.39 11.2L6.39 6.39C6.39 6.29 6.44 6.19 6.51 6.11C6.59 6.04 6.69 6 6.79 6ZM9.59 6.39C9.59 6.29 9.55 6.19 9.48 6.11C9.4 6.04 9.3 6 9.19 6C9.09 6 8.99 6.04 8.91 6.11C8.84 6.19 8.79 6.29 8.79 6.39L8.79 11.2C8.79 11.3 8.84 11.4 8.91 11.48C8.99 11.55 9.09 11.6 9.19 11.6C9.3 11.6 9.4 11.55 9.48 11.48C9.55 11.4 9.59 11.3 9.59 11.2L9.59 6.39Z"
						fill={getTailwindColor(colorFill) || "#2e2e2e"}
						fillOpacity="1.000000"
						fillRule="nonzero"
					/>
				</g>
			</svg>
		</div>
	)
}
