"use client"

import { FC, useState } from "react"
import { getTailwindColor } from "../../utils"

interface HeartHeaderIconProps {
	size?: number
	onToggle?: (isFavoriteBooksOn: boolean) => void
}
export const HeartHeaderIcon: FC<HeartHeaderIconProps> = ({
	size = 30,
	onToggle,
}) => {
	const [filled, setFilled] = useState(false)

	const handleClick = () => {
		setFilled(!filled)

		if (onToggle) {
			onToggle(!filled)
			console.log("HeartHeaderIcon clicked")
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
					<clipPath id="clip10_408">
						<rect
							id="gridicons:heart-outline"
							rx="0.000000"
							width="29.000000"
							height="29.000000"
							transform="translate(0.500000 0.500000)"
							fill="white"
							fillOpacity="0"
						/>
					</clipPath>
				</defs>
				<rect
					id="gridicons:heart-outline"
					rx="0.000000"
					width="29.000000"
					height="29.000000"
					transform="translate(0.500000 0.500000)"
					fill="#FFFFFF"
					fillOpacity="0"
				/>
				<g clipPath="url(#clip10_408)">
					<path
						id="Vector"
						d="M20.62 5.62C23.38 5.62 25.62 7.86 25.62 10.62C25.62 16.46 18.69 21.8 15 24.4C11.3 21.8 4.37 16.46 4.37 10.62C4.37 7.86 6.61 5.62 9.37 5.62C10.17 5.62 10.96 5.82 11.68 6.19C12.39 6.56 13 7.1 13.46 7.75L15 9.94L16.53 7.75C16.99 7.1 17.6 6.56 18.31 6.19C19.03 5.82 19.82 5.62 20.62 5.62ZM20.62 3.75C19.52 3.74 18.43 4.01 17.45 4.52C16.47 5.03 15.63 5.77 15 6.68C14.36 5.77 13.52 5.03 12.54 4.52C11.56 4.01 10.47 3.74 9.37 3.75C7.55 3.75 5.8 4.47 4.51 5.76C3.22 7.05 2.5 8.8 2.5 10.62C2.5 17.77 10.62 23.67 15 26.68C19.37 23.67 27.5 17.77 27.5 10.62C27.5 9.72 27.32 8.82 26.97 7.99C26.63 7.15 26.12 6.4 25.48 5.76C24.84 5.12 24.08 4.61 23.25 4.27C22.42 3.92 21.52 3.75 20.62 3.75Z"
						fill={getTailwindColor("customBlack") || "#000000"}
						fillOpacity="1.000000"
						fillRule="nonzero"
					/>
				</g>
			</svg>
		</div>
	)
}
