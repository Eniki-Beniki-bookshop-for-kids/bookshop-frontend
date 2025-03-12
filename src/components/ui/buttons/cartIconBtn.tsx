import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const CartIconBtn: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customDarkGray") || "#2e2e2e",
	size = 22,
	onClick,
}) => {
	return (
		<div
			onClick={onClick}
			className="cursor-pointer transform transition-transform duration-200 hover:scale-110"
		>
			<svg
				width={size}
				height={size}
				viewBox="0 0 22 22"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="Vector"
					d="M8.75 19.02C7.89 19.02 7.19 18.32 7.19 17.46C7.19 16.6 7.89 15.9 8.75 15.9C9.61 15.9 10.31 16.6 10.31 17.46C10.31 18.32 9.61 19.02 8.75 19.02Z"
					stroke={getTailwindColor(colorFill) || "#2e2e2e"}
					strokeOpacity="1.000000"
					strokeWidth="1.500000"
					strokeLinejoin="round"
				/>
				<path
					id="Vector"
					d="M15.54 19.02C14.68 19.02 13.98 18.32 13.98 17.46C13.98 16.6 14.68 15.9 15.54 15.9C16.4 15.9 17.1 16.6 17.1 17.46C17.1 18.32 16.4 19.02 15.54 19.02Z"
					stroke={getTailwindColor(colorFill) || "#2e2e2e"}
					strokeOpacity="1.000000"
					strokeWidth="1.500000"
					strokeLinejoin="round"
				/>
				<path
					id="Vector"
					d="M2.29 2.97C2.5 2.97 2.6 2.97 2.69 2.98C3.2 3.02 3.68 3.19 4.09 3.49C4.5 3.79 4.81 4.2 5 4.67C5.04 4.8 5.09 4.92 5.12 5.05L5.13 5.09L6.98 10.92C7.26 11.82 7.4 12.27 7.67 12.6C7.91 12.89 8.22 13.12 8.57 13.26C8.97 13.42 9.44 13.42 10.38 13.42L13.92 13.42C14.86 13.42 15.33 13.42 15.72 13.26C16.08 13.12 16.39 12.89 16.62 12.6C16.9 12.27 17.04 11.82 17.32 10.92L17.7 9.73L17.92 9.03L18.22 8.07C18.33 7.72 18.35 7.36 18.29 7.01C18.24 6.65 18.09 6.31 17.88 6.02C17.67 5.73 17.39 5.5 17.07 5.33C16.75 5.17 16.39 5.09 16.03 5.09L5.13 5.09"
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
