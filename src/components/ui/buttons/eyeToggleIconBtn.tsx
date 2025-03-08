"use client"

import { getTailwindColor } from "@/utils"
import { FC, useState } from "react"
import { IButtonProps } from "../../../types/propsInterfaces"

interface EyeToggleIconBtnProps extends IButtonProps {
	onToggle?: (isVisible: boolean) => void
}

export const EyeToggleIconBtn: FC<EyeToggleIconBtnProps> = ({
	colorFill = getTailwindColor("customDarkGray") || "#2e2e2e",
	size = 24,
	onToggle,
	disabled = false,
}) => {
	const [show, setShow] = useState(false)

	const toggle = () => {
		setShow(prev => {
			const newState = !prev
			if (onToggle) {
				onToggle(newState)
			}
			return newState
		})
	}

	return (
		<div
			onClick={toggle}
			className={`inline-block ${
				!disabled
					? "cursor-pointer transform transition-transform duration-200 hover:scale-110"
					: ""
			}`}
		>
			{disabled && (
				<svg
					width={size}
					height={size}
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						id="Vector"
						d="M14.12 14.12C13.55 14.68 12.79 15 12 15C11.2 15 10.44 14.68 9.87 14.12C9.31 13.55 9 12.79 9 12C9 11.2 9.31 10.44 9.87 9.87C10.44 9.31 11.2 9 12 9C12.79 9 13.55 9.31 14.12 9.87C14.68 10.44 15 11.2 15 12C15 12.79 14.68 13.55 14.12 14.12Z"
						stroke={getTailwindColor(colorFill) || "#9C9C9C"}
						strokeOpacity="1.000000"
						strokeWidth="1.500000"
						strokeLinejoin="round"
					/>
					<path
						id="Vector"
						d="M12 5C16.66 5 20.4 7.9 22 12C20.4 16.09 16.66 19 12 19C7.33 19 3.59 16.09 2 12C3.59 7.9 7.33 5 12 5Z"
						stroke={getTailwindColor(colorFill) || "#9C9C9C"}
						strokeOpacity="1.000000"
						strokeWidth="1.500000"
						strokeLinejoin="round"
					/>
				</svg>
			)}
			{show && !disabled && (
				<svg
					width={size}
					height={size}
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						id="Vector"
						d="M14.12 14.12C13.55 14.68 12.79 15 12 15C11.2 15 10.44 14.68 9.87 14.12C9.31 13.55 9 12.79 9 12C9 11.2 9.31 10.44 9.87 9.87C10.44 9.31 11.2 9 12 9C12.79 9 13.55 9.31 14.12 9.87C14.68 10.44 15 11.2 15 12C15 12.79 14.68 13.55 14.12 14.12Z"
						stroke={getTailwindColor(colorFill) || "#2e2e2e"}
						strokeOpacity="1.000000"
						strokeWidth="1.500000"
						strokeLinejoin="round"
					/>
					<path
						id="Vector"
						d="M12 5C16.66 5 20.4 7.9 22 12C20.4 16.09 16.66 19 12 19C7.33 19 3.59 16.09 2 12C3.59 7.9 7.33 5 12 5Z"
						stroke={getTailwindColor(colorFill) || "#2e2e2e"}
						strokeOpacity="1.000000"
						strokeWidth="1.500000"
						strokeLinejoin="round"
					/>
				</svg>
			)}
			{!show && !disabled && (
				<svg
					width={size}
					height={size}
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						id="Vector"
						d="M10.73 5.07C11.15 5.02 11.57 4.99 12 5C16.66 5 20.4 7.9 22 12C21.61 12.99 21.08 13.93 20.44 14.78M6.51 6.51C4.48 7.76 2.9 9.69 2 12C3.59 16.09 7.33 19 12 19C13.93 19.01 15.82 18.48 17.48 17.48M9.87 9.87C9.6 10.15 9.38 10.48 9.22 10.85C9.07 11.21 9 11.6 9 12C9 12.39 9.07 12.78 9.22 13.14C9.38 13.51 9.6 13.84 9.87 14.12C10.15 14.4 10.48 14.62 10.85 14.77C11.21 14.92 11.6 15 12 15C12.39 15 12.78 14.92 13.14 14.77C13.51 14.62 13.84 14.4 14.12 14.12"
						stroke={getTailwindColor(colorFill) || "#2e2e2e"}
						strokeOpacity="1.000000"
						strokeWidth="1.500000"
						strokeLinejoin="round"
						strokeLinecap="round"
					/>
					<path
						id="Vector"
						d="M4 4L20 20"
						stroke={getTailwindColor(colorFill) || "#2e2e2e"}
						strokeOpacity="1.000000"
						strokeWidth="1.500000"
						strokeLinecap="round"
					/>
				</svg>
			)}
		</div>
	)
}
