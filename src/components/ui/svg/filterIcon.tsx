import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const FilterIcon: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customBlack") || "#0E0E0E",
	size = 18,
}) => {
	return (
		<svg
			width={size}
			height={size + 1}
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 3.5H20C20.2652 3.5 20.5196 3.60536 20.7071 3.79289C20.8946 3.98043 21 4.23478 21 4.5V6.086C20.9999 6.35119 20.8946 6.60551 20.707 6.793L14.293 13.207C14.1055 13.3945 14.0001 13.6488 14 13.914V20.219C14 20.371 13.9653 20.521 13.8987 20.6576C13.832 20.7942 13.735 20.9138 13.6152 21.0073C13.4954 21.1008 13.3558 21.1658 13.2071 21.1973C13.0584 21.2288 12.9044 21.2259 12.757 21.189L10.757 20.689C10.5408 20.6348 10.3488 20.51 10.2117 20.3342C10.0745 20.1585 10 19.9419 10 19.719V13.914C9.99994 13.6488 9.89455 13.3945 9.707 13.207L3.293 6.793C3.10545 6.60551 3.00006 6.35119 3 6.086V4.5C3 4.23478 3.10536 3.98043 3.29289 3.79289C3.48043 3.60536 3.73478 3.5 4 3.5Z"
				stroke={getTailwindColor(colorFill) || "#0E0E0E"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
