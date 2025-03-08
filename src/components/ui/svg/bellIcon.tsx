import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const BellIcon: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customDarkGray") || "#2e2e2e",
	size = 20,
}) => {
	return (
		<div className="inline-block">
			<svg
				width={size}
				height={size}
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs />
				<rect
					id="proicons:bell"
					rx="9.500000"
					width={size}
					height={size}
					transform="translate(0.500000 0.500000)"
					fill="transparent"
					fillOpacity="1.000000"
				/>
				<path
					id="Vector"
					d="M15.39 11.15L15.39 7.68C15.39 6.25 14.82 4.88 13.81 3.87C12.8 2.85 11.43 2.29 10 2.29C8.56 2.29 7.19 2.85 6.18 3.87C5.17 4.88 4.6 6.25 4.6 7.68L4.6 11.15C4.6 11.62 4.47 12.08 4.22 12.48L3.31 13.93C3.23 14.05 3.19 14.2 3.18 14.35C3.18 14.5 3.22 14.64 3.29 14.77C3.36 14.9 3.47 15.01 3.59 15.09C3.72 15.16 3.87 15.2 4.02 15.2L15.97 15.2C16.12 15.2 16.27 15.16 16.4 15.09C16.52 15.01 16.63 14.9 16.7 14.77C16.77 14.64 16.81 14.5 16.81 14.35C16.8 14.2 16.76 14.05 16.68 13.93L15.77 12.48C15.52 12.08 15.39 11.62 15.39 11.15Z"
					stroke={getTailwindColor(colorFill) || "#2e2e2e"}
					strokeOpacity="1.000000"
					strokeWidth="1.500000"
					strokeLinejoin="round"
				/>
				<path
					id="Vector"
					d="M8.33 17.7L11.66 17.7"
					stroke={getTailwindColor(colorFill) || "#2e2e2e"}
					strokeOpacity="1.000000"
					strokeWidth="1.500000"
					strokeLinecap="round"
				/>
			</svg>
		</div>
	)
}
