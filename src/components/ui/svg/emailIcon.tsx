import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const EmailIcon: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customDarkGray") || "#2e2e2e",
	size = 20,
}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				id="Vector"
				d="M2.5 4.16L2.5 3.54C2.33 3.54 2.17 3.6 2.05 3.72C1.94 3.84 1.87 4 1.87 4.16L2.5 4.16ZM17.5 4.16L18.12 4.16C18.12 4 18.05 3.84 17.94 3.72C17.82 3.6 17.66 3.54 17.5 3.54L17.5 4.16ZM2.5 4.79L17.5 4.79L17.5 3.54L2.5 3.54L2.5 4.79ZM16.87 4.16L16.87 14.16L18.12 14.16L18.12 4.16L16.87 4.16ZM15.83 15.2L4.16 15.2L4.16 16.45L15.83 16.45L15.83 15.2ZM3.12 14.16L3.12 4.16L1.87 4.16L1.87 14.16L3.12 14.16ZM4.16 15.2C3.59 15.2 3.12 14.74 3.12 14.16L1.87 14.16C1.87 14.77 2.11 15.35 2.54 15.78C2.97 16.21 3.55 16.45 4.16 16.45L4.16 15.2ZM16.87 14.16C16.87 14.74 16.4 15.2 15.83 15.2L15.83 16.45C16.44 16.45 17.02 16.21 17.45 15.78C17.88 15.35 18.12 14.77 18.12 14.16L16.87 14.16Z"
				fill={getTailwindColor(colorFill) || "#2e2e2e"}
				fillOpacity="1.000000"
				fillRule="nonzero"
			/>
			<path
				id="Vector"
				d="M2.5 4.16L10 11.66L17.5 4.16"
				stroke={getTailwindColor(colorFill) || "#2e2e2e"}
				strokeOpacity="1.000000"
				strokeWidth="1.500000"
				strokeLinejoin="round"
				strokeLinecap="round"
			/>
		</svg>
	)
}
