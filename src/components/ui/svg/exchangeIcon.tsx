import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const ExchangeIcon: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customViolet") || "#8748FF",
	size = 40,
}) => {
	return (
		<div className="inline-block">
			<svg
				width={size}
				height={size}
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="Vector"
					d="M30.04 28.26C28.08 30.2 25.6 31.53 22.9 32.06C20.19 32.6 17.39 32.32 14.85 31.27C12.3 30.21 10.12 28.43 8.59 26.14C7.06 23.85 6.23 21.16 6.23 18.4"
					stroke={getTailwindColor(colorFill) || "#8748FF"}
					strokeOpacity="1.000000"
					strokeWidth="2.000000"
					strokeLinecap="round"
				/>
				<path
					id="Vector"
					d="M28.91 35.41L30.3 29.79C30.36 29.55 30.38 29.29 30.34 29.04C30.3 28.79 30.21 28.55 30.08 28.34C29.95 28.12 29.77 27.93 29.56 27.79C29.36 27.64 29.12 27.54 28.87 27.49L23.25 26.08"
					stroke={getTailwindColor(colorFill) || "#8748FF"}
					strokeOpacity="1.000000"
					strokeWidth="2.000000"
					strokeLinejoin="round"
					strokeLinecap="round"
				/>
				<path
					id="Vector"
					d="M9.95 11.73C11.91 9.79 14.39 8.46 17.09 7.93C19.8 7.39 22.6 7.67 25.14 8.72C27.69 9.77 29.87 11.56 31.4 13.85C32.94 16.14 33.76 18.83 33.76 21.59"
					stroke={getTailwindColor(colorFill) || "#8748FF"}
					strokeOpacity="1.000000"
					strokeWidth="2.000000"
					strokeLinecap="round"
				/>
				<path
					id="Vector"
					d="M11.08 4.58L9.69 10.2C9.63 10.44 9.62 10.7 9.65 10.95C9.69 11.2 9.78 11.44 9.91 11.65C10.05 11.87 10.22 12.06 10.43 12.2C10.63 12.35 10.87 12.45 11.12 12.5L16.74 13.91"
					stroke={getTailwindColor(colorFill) || "#8748FF"}
					strokeOpacity="1.000000"
					strokeWidth="2.000000"
					strokeLinejoin="round"
					strokeLinecap="round"
				/>
			</svg>
		</div>
	)
}
