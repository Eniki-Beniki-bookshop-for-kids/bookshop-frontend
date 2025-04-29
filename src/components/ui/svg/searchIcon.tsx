import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const SearchIcon: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customDarkGray") || "#6a6a6a",
	size = 26,
}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 26 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				id="Vector"
				d="M18.2 18.2C16.68 19.72 14.61 20.58 12.45 20.58C10.3 20.58 8.23 19.72 6.71 18.2C5.18 16.67 4.33 14.61 4.33 12.45C4.33 10.3 5.18 8.23 6.71 6.71C8.23 5.18 10.3 4.33 12.45 4.33C14.61 4.33 16.68 5.18 18.2 6.71C19.72 8.23 20.58 10.3 20.58 12.45C20.58 14.61 19.72 16.67 18.2 18.2ZM18.3 18.33L21.63 21.66"
				stroke={getTailwindColor(colorFill) || "#6a6a6a"}
				strokeOpacity="1.000000"
				strokeWidth="2.000000"
				strokeLinejoin="round"
				strokeLinecap="round"
			/>
		</svg>
	)
}
