import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const ArrowUpIcon: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customDarkGray") || "#2E2E2E",
	size = 18,
}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			transform="rotate(180 0 0)"
		>
			<path
				id="Vector"
				d="M10.77 3.96C10.63 3.82 10.44 3.75 10.24 3.75C10.04 3.75 9.85 3.82 9.71 3.96L6 7.68L2.28 3.96C2.14 3.83 1.95 3.75 1.75 3.75C1.56 3.76 1.37 3.83 1.23 3.97C1.09 4.11 1.01 4.3 1.01 4.5C1.01 4.69 1.09 4.88 1.22 5.03L5.46 9.27C5.61 9.41 5.8 9.49 6 9.49C6.19 9.49 6.38 9.41 6.53 9.27L10.77 5.03C10.91 4.88 10.99 4.69 10.99 4.49C10.99 4.3 10.91 4.11 10.77 3.96Z"
				fill={getTailwindColor(colorFill) || "#2E2E2E"}
				fillOpacity="1.000000"
				fillRule="nonzero"
				rotate={180}
			/>
		</svg>
	)
}
