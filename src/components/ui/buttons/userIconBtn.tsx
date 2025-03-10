"use client"

import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const UserIconBtn: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customBlack") || "#0e0e0e",
	size = 28,
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
				viewBox="0 0 28 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="Vector"
					d="M14 17.5C12.61 17.5 11.26 17.08 10.11 16.32C8.95 15.55 8.06 14.45 7.53 13.17C7 11.89 6.86 10.49 7.13 9.13C7.4 7.77 8.07 6.52 9.05 5.55C10.02 4.57 11.27 3.9 12.63 3.63C13.99 3.36 15.39 3.5 16.67 4.03C17.95 4.56 19.05 5.45 19.82 6.61C20.58 7.76 21 9.11 21 10.5C21 12.35 20.26 14.13 18.94 15.44C17.63 16.76 15.85 17.5 14 17.5ZM14 5.25C12.96 5.25 11.94 5.55 11.08 6.13C10.21 6.71 9.54 7.53 9.14 8.49C8.75 9.45 8.64 10.5 8.85 11.52C9.05 12.54 9.55 13.47 10.28 14.21C11.02 14.94 11.95 15.44 12.97 15.64C13.99 15.85 15.04 15.74 16 15.35C16.96 14.95 17.78 14.28 18.36 13.41C18.94 12.55 19.25 11.53 19.25 10.5C19.25 9.1 18.69 7.77 17.71 6.78C16.72 5.8 15.39 5.25 14 5.25Z"
					fill={getTailwindColor(colorFill) || "#0e0e0e"}
					fillOpacity="1.000000"
					fillRule="nonzero"
				/>
				<path
					id="Vector"
					d="M26.25 28L24.5 28C24.5 25.21 23.39 22.54 21.42 20.57C19.45 18.6 16.78 17.5 14 17.5C11.21 17.5 8.54 18.6 6.57 20.57C4.6 22.54 3.5 25.21 3.5 28L1.75 28C1.75 24.75 3.04 21.63 5.33 19.33C7.63 17.04 10.75 15.75 14 15.75C17.24 15.75 20.36 17.04 22.66 19.33C24.95 21.63 26.25 24.75 26.25 28Z"
					fill={getTailwindColor(colorFill) || "#0e0e0e"}
					fillOpacity="1.000000"
					fillRule="nonzero"
				/>
			</svg>
		</div>
	)
}
