import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const ChatIcon: FC<IButtonProps> = ({
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
				d="M6.66 10L6.67 10M10 10L10 10M13.33 10L13.34 10M10 16.66C8.77 16.66 7.56 16.39 6.45 15.87L2.5 16.66L3.66 13.56C2.92 12.53 2.5 11.31 2.5 10C2.5 6.31 5.85 3.33 10 3.33C14.14 3.33 17.5 6.31 17.5 10C17.5 13.68 14.14 16.66 10 16.66Z"
				stroke={getTailwindColor(colorFill) || "#2e2e2e"}
				strokeOpacity="1.000000"
				strokeWidth="1.500000"
				strokeLinejoin="round"
				strokeLinecap="round"
			/>
		</svg>
	)
}
