import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const PaymentCashIcon: FC<IButtonProps> = ({
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
				d="M4.58 18.33C4.09 18.33 3.63 18.14 3.28 17.79C2.94 17.45 2.75 16.98 2.75 16.5L2.75 8.25C2.75 7.76 2.94 7.29 3.28 6.95C3.63 6.6 4.09 6.41 4.58 6.41L17.41 6.41C17.9 6.41 18.36 6.6 18.71 6.95C19.05 7.29 19.25 7.76 19.25 8.25L19.25 16.5C19.25 16.98 19.05 17.45 18.71 17.79C18.36 18.14 17.9 18.33 17.41 18.33L4.58 18.33Z"
				stroke={getTailwindColor(colorFill) || "#2e2e2e"}
				strokeOpacity="1.000000"
				strokeWidth="1.500000"
			/>
			<path
				id="Vector"
				d="M15.12 12.83C15 12.83 14.88 12.78 14.8 12.69C14.71 12.61 14.66 12.49 14.66 12.37C14.66 12.25 14.71 12.13 14.8 12.05C14.88 11.96 15 11.91 15.12 11.91C15.24 11.91 15.36 11.96 15.44 12.05C15.53 12.13 15.58 12.25 15.58 12.37C15.58 12.49 15.53 12.61 15.44 12.69C15.36 12.78 15.24 12.83 15.12 12.83Z"
				fill={getTailwindColor(colorFill) || "#2e2e2e"}
				fillOpacity="1.000000"
				fillRule="nonzero"
			/>
			<path
				id="Vector"
				d="M14.8 12.69C14.71 12.61 14.66 12.49 14.66 12.37C14.66 12.25 14.71 12.13 14.8 12.05C14.88 11.96 15 11.91 15.12 11.91C15.24 11.91 15.36 11.96 15.44 12.05C15.53 12.13 15.58 12.25 15.58 12.37C15.58 12.49 15.53 12.61 15.44 12.69C15.36 12.78 15.24 12.83 15.12 12.83C15 12.83 14.88 12.78 14.8 12.69Z"
				stroke={getTailwindColor(colorFill) || "#2e2e2e"}
				strokeOpacity="1.000000"
				strokeWidth="1.500000"
				strokeLinejoin="round"
			/>
			<path
				id="Vector"
				d="M16.5 6.41L16.5 5.13C16.49 4.85 16.43 4.57 16.31 4.32C16.18 4.07 16 3.85 15.78 3.68C15.56 3.51 15.3 3.39 15.02 3.33C14.75 3.28 14.46 3.29 14.19 3.36L4.11 6.05C3.72 6.15 3.37 6.38 3.12 6.7C2.88 7.02 2.74 7.42 2.75 7.82L2.75 8.25"
				stroke={getTailwindColor(colorFill) || "#2e2e2e"}
				strokeOpacity="1.000000"
				strokeWidth="1.500000"
			/>
		</svg>
	)
}
