import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const ArrowDownIcon: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customBlack") || "#0E0E0E",
	size = 18,
}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				id="Vector"
				d="M16.15 5.95C15.94 5.74 15.66 5.62 15.36 5.62C15.06 5.62 14.77 5.74 14.56 5.95L9 11.52L3.43 5.95C3.21 5.74 2.93 5.63 2.63 5.63C2.34 5.64 2.06 5.75 1.85 5.96C1.64 6.17 1.52 6.45 1.52 6.75C1.52 7.04 1.63 7.33 1.84 7.54L8.2 13.9C8.41 14.12 8.7 14.23 9 14.23C9.29 14.23 9.58 14.12 9.79 13.9L16.15 7.54C16.37 7.33 16.48 7.04 16.48 6.75C16.48 6.45 16.37 6.16 16.15 5.95Z"
				fill={getTailwindColor(colorFill) || "#0E0E0E"}
				fillOpacity="1.000000"
				fillRule="nonzero"
			/>
		</svg>
	)
}
