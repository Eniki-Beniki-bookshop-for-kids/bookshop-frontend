import { IIconProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const BookCatalogIcon: FC<IIconProps> = ({
	color = getTailwindColor("customViolet") || "#8748FF",
	size = 28,
}) => {
	return (
		<div className="inline-block">
			<svg
				width={size}
				height={size}
				viewBox="0 0 28 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs />
				<rect
					id="mage:book"
					rx="0.000000"
					width={size}
					height={size}
					transform="translate(0.500000 0.500000)"
					fill="transparent"
					fillOpacity="0"
				/>
				<path
					id="Vector"
					d="M14 7.51C12.42 6.41 10.59 5.7 8.68 5.45C7.3 5.18 5.89 5.05 4.48 5.08C4.14 5.1 3.82 5.25 3.59 5.5C3.36 5.75 3.23 6.08 3.23 6.42L3.2 19.13C3.2 19.31 3.24 19.48 3.31 19.65C3.37 19.81 3.47 19.96 3.6 20.08C3.73 20.21 3.88 20.31 4.04 20.37C4.2 20.44 4.38 20.47 4.56 20.47C5.94 20.45 7.32 20.58 8.68 20.86C10.59 21.1 12.42 21.8 14 22.91C15.57 21.8 17.4 21.1 19.31 20.86C20.67 20.58 22.05 20.45 23.43 20.47C23.61 20.47 23.79 20.44 23.95 20.37C24.11 20.31 24.26 20.21 24.39 20.08C24.52 19.96 24.62 19.81 24.68 19.65C24.75 19.48 24.79 19.31 24.79 19.13L24.76 6.42C24.76 6.08 24.63 5.75 24.4 5.5C24.17 5.25 23.85 5.1 23.51 5.08C22.1 5.05 20.69 5.18 19.31 5.45C17.4 5.7 15.57 6.41 14 7.51L14 22.91"
					stroke={getTailwindColor(color) || "#8748FF"}
					strokeOpacity="1.000000"
					strokeWidth="1.500000"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	)
}
