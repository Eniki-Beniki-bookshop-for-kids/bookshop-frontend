import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const ArrowRightIcon: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customBlack") || "#0E0E0E",
	size = 20,
}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5.29295 1.636C5.10548 1.82353 5.00016 2.07784 5.00016 2.343C5.00016 2.60817 5.10548 2.86247 5.29295 3.05L10.243 8L5.29295 12.95C5.11079 13.1386 5.01 13.3912 5.01228 13.6534C5.01456 13.9156 5.11972 14.1664 5.30513 14.3518C5.49054 14.5372 5.74135 14.6424 6.00355 14.6447C6.26575 14.647 6.51835 14.5462 6.70695 14.364L12.364 8.707C12.5514 8.51947 12.6567 8.26517 12.6567 8C12.6567 7.73484 12.5514 7.48053 12.364 7.293L6.70695 1.636C6.51942 1.44853 6.26512 1.34322 5.99995 1.34322C5.73479 1.34322 5.48048 1.44853 5.29295 1.636Z"
				fill={getTailwindColor(colorFill) || "#0E0E0E"}
			/>
		</svg>
	)
}
