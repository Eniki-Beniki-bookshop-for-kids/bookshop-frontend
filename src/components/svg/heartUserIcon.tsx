"use client"

import { FC } from "react"
import { getTailwindColor } from "../../utils"

interface HeartUserIconProps {
	size?: number
}
export const HeartUserIcon: FC<HeartUserIconProps> = ({ size = 20 }) => {
	return (
		<div className="inline-block">
			<svg
				width={size}
				height={size}
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<clipPath id="clip10_456">
						<rect
							id="ph:heart-fill"
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
					id="ph:heart-fill"
					rx="0.000000"
					width={size}
					height={size}
					transform="translate(0.500000 0.500000)"
					fill="#FFFFFF"
					fillOpacity="0"
				/>
				<g clipPath="url(#clip10_456)">
					<path
						id="Vector"
						d="M11.09 3.95C10.67 4.23 10.3 4.58 10 4.99C9.69 4.58 9.32 4.23 8.9 3.95C8.11 3.42 7.14 3.12 6.09 3.12C4.8 3.12 3.57 3.63 2.67 4.54C1.76 5.45 1.25 6.68 1.25 7.96C1.25 13.43 9.35 17.86 9.7 18.04C9.79 18.09 9.89 18.12 10 18.12C10.1 18.12 10.2 18.09 10.29 18.04C10.64 17.86 18.75 13.43 18.75 7.96C18.74 6.68 18.23 5.45 17.32 4.54C16.42 3.63 15.19 3.12 13.9 3.12C12.85 3.12 11.88 3.42 11.09 3.95ZM10.4 16.72Q10.41 16.72 10.41 16.72Q10.41 16.72 10.4 16.72ZM10 16.49L10 16.49L9.99 16.49Q9.54 16.22 9.05 15.9Q7.56 14.93 6.33 13.86Q4.69 12.42 3.78 11.01Q2.75 9.41 2.75 7.96Q2.75 7.64 2.81 7.33Q2.87 7 3 6.69Q3.13 6.38 3.31 6.11Q3.49 5.84 3.73 5.6Q3.96 5.37 4.23 5.18Q4.5 5 4.81 4.88Q5.12 4.75 5.44 4.68Q5.76 4.62 6.09 4.62Q6.84 4.62 7.49 4.88Q7.58 4.92 7.67 4.97Q8.08 5.17 8.41 5.47Q8.62 5.66 8.8 5.89L10 7.48L11.19 5.89Q11.37 5.66 11.58 5.47Q11.91 5.17 12.32 4.97Q12.41 4.93 12.49 4.89Q13.14 4.62 13.9 4.62Q14.22 4.62 14.53 4.68Q14.86 4.74 15.18 4.88Q15.49 5 15.76 5.18Q16.03 5.37 16.26 5.6Q16.5 5.84 16.68 6.11Q16.86 6.38 16.99 6.69Q17.12 6.99 17.18 7.31Q17.24 7.63 17.25 7.97Q17.25 9.41 16.21 11.01Q15.3 12.42 13.66 13.86Q12.43 14.93 10.94 15.9Q10.45 16.22 10 16.49Z"
						fill={getTailwindColor("customBlack") || "#000000"}
						fillOpacity="1.000000"
						fillRule="evenodd"
					/>
				</g>
			</svg>
		</div>
	)
}
