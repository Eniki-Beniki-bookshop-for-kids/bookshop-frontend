import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const OrderIcon: FC<IButtonProps> = ({
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
					id="iconamoon:historyLight"
					rx="9.500000"
					width={size}
					height={size}
					transform="translate(0.500000 0.500000)"
					fill="transparent"
					fillOpacity="1.000000"
				/>
				<path
					id="Vector"
					d="M5.52 15.3C6.75 16.53 8.37 17.29 10.09 17.46C11.82 17.63 13.55 17.19 15 16.23C16.44 15.27 17.5 13.83 18.01 12.17C18.51 10.51 18.42 8.73 17.76 7.12C17.09 5.52 15.89 4.2 14.36 3.38C12.83 2.56 11.06 2.3 9.36 2.64C7.66 2.98 6.13 3.9 5.03 5.24C3.93 6.58 3.33 8.26 3.33 10L3.33 11.66"
					stroke={getTailwindColor(colorFill) || "#2e2e2e"}
					strokeOpacity="1.000000"
					strokeWidth="1.500000"
					strokeLinejoin="round"
					strokeLinecap="round"
				/>
				<path
					id="Vector"
					d="M1.66 9.99L3.33 11.66L5 9.99M10 6.66L10 10.83L14.16 10.83"
					stroke={getTailwindColor(colorFill) || "#2e2e2e"}
					strokeOpacity="1.000000"
					strokeWidth="1.500000"
					strokeLinejoin="round"
					strokeLinecap="round"
				/>
			</svg>
		</div>
	)
}
