import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const PaymentCardIcon: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customDarkGray") || "#2e2e2e",
	size = 22,
}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				id="Vector"
				d="M9.11 2.97L12.88 2.97C14.56 2.97 15.9 2.97 16.94 3.11C18.02 3.26 18.89 3.56 19.57 4.25C20.26 4.94 20.56 5.81 20.71 6.88C20.79 7.5 20.83 8.21 20.84 9.05C20.85 9.12 20.85 9.19 20.84 9.26C20.85 9.78 20.85 10.34 20.85 10.94L20.85 11.05C20.85 12.73 20.85 14.07 20.71 15.11C20.56 16.18 20.26 17.05 19.57 17.74C18.89 18.43 18.02 18.73 16.94 18.88C15.9 19.02 14.56 19.02 12.88 19.02L9.11 19.02C7.43 19.02 6.09 19.02 5.05 18.88C3.97 18.73 3.1 18.43 2.42 17.74C1.73 17.05 1.43 16.18 1.28 15.11C1.14 14.06 1.14 12.73 1.14 11.05L1.14 10.94C1.14 10.34 1.14 9.78 1.15 9.26C1.14 9.19 1.14 9.12 1.15 9.05C1.16 8.21 1.2 7.5 1.28 6.88C1.43 5.81 1.73 4.94 2.42 4.25C3.1 3.56 3.97 3.26 5.05 3.11C6.09 2.97 7.43 2.97 9.11 2.97ZM2.52 9.85C2.52 10.21 2.52 10.59 2.52 11C2.52 12.74 2.52 13.99 2.64 14.93C2.77 15.85 3 16.38 3.39 16.77C3.78 17.16 4.31 17.39 5.23 17.51C6.17 17.64 7.41 17.64 9.16 17.64L12.83 17.64C14.58 17.64 15.82 17.64 16.76 17.51C17.68 17.39 18.21 17.16 18.6 16.77C18.99 16.38 19.22 15.85 19.35 14.93C19.47 13.98 19.47 12.74 19.47 11C19.47 10.59 19.47 10.21 19.47 9.85L2.52 9.85ZM19.45 8.47L2.54 8.47C2.56 7.94 2.59 7.47 2.64 7.06C2.77 6.14 3 5.61 3.39 5.22C3.78 4.83 4.31 4.6 5.23 4.48C6.17 4.35 7.41 4.35 9.16 4.35L12.83 4.35C14.58 4.35 15.82 4.35 16.76 4.48C17.68 4.6 18.21 4.83 18.6 5.22C18.99 5.61 19.22 6.14 19.35 7.06C19.4 7.47 19.43 7.94 19.45 8.47ZM4.81 14.66C4.81 14.48 4.88 14.3 5.01 14.18C5.14 14.05 5.31 13.97 5.5 13.97L9.16 13.97C9.34 13.97 9.52 14.05 9.65 14.18C9.78 14.3 9.85 14.48 9.85 14.66C9.85 14.84 9.78 15.02 9.65 15.15C9.52 15.28 9.34 15.35 9.16 15.35L5.5 15.35C5.31 15.35 5.14 15.28 5.01 15.15C4.88 15.02 4.81 14.84 4.81 14.66ZM10.77 14.66C10.77 14.48 10.84 14.3 10.97 14.18C11.1 14.05 11.27 13.97 11.45 13.97L12.83 13.97C13.01 13.97 13.19 14.05 13.31 14.18C13.44 14.3 13.52 14.48 13.52 14.66C13.52 14.84 13.44 15.02 13.31 15.15C13.19 15.28 13.01 15.35 12.83 15.35L11.45 15.35C11.27 15.35 11.1 15.28 10.97 15.15C10.84 15.02 10.77 14.84 10.77 14.66Z"
				fill={getTailwindColor(colorFill) || "#2e2e2e"}
				fillOpacity="1.000000"
				fillRule="evenodd"
			/>
		</svg>
	)
}
