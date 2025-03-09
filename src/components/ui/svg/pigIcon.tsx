import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const PigIcon: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customDarkGray") || "#2e2e2e",
	size = 20,
}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				id="Vector"
				d="M12.5 9.16L12.5 9.17M4.31 6.98C3.94 6.7 3.66 6.32 3.5 5.89C3.33 5.46 3.29 4.99 3.37 4.54C3.46 4.08 3.66 3.66 3.97 3.32C4.28 2.98 4.68 2.73 5.12 2.6C5.56 2.47 6.03 2.46 6.48 2.58C6.92 2.7 7.33 2.94 7.64 3.27C7.96 3.61 8.18 4.02 8.28 4.48C8.37 4.93 8.34 5.39 8.19 5.83"
				stroke={getTailwindColor(colorFill) || "#2e2e2e"}
				strokeOpacity="1.000000"
				strokeWidth="1.500000"
				strokeLinejoin="round"
				strokeLinecap="round"
			/>
			<path
				id="Vector"
				d="M13.33 6.5C14.36 7.09 15.15 8.04 15.54 9.16L16.66 9.16C16.88 9.16 17.1 9.25 17.25 9.41C17.41 9.56 17.5 9.77 17.5 10L17.5 11.66C17.5 11.88 17.41 12.09 17.25 12.25C17.1 12.41 16.88 12.5 16.66 12.5L15.54 12.5C15.26 13.29 14.79 14 14.16 14.56L14.16 16.25C14.16 16.58 14.03 16.89 13.8 17.13C13.56 17.36 13.24 17.5 12.91 17.5C12.58 17.5 12.26 17.36 12.03 17.13C11.79 16.89 11.66 16.58 11.66 16.25L11.66 15.76C11.39 15.81 11.11 15.83 10.83 15.83L7.5 15.83C7.22 15.83 6.94 15.81 6.66 15.76L6.66 16.25C6.66 16.58 6.53 16.89 6.3 17.13C6.06 17.36 5.74 17.5 5.41 17.5C5.08 17.5 4.76 17.36 4.53 17.13C4.29 16.89 4.16 16.58 4.16 16.25L4.16 14.56C3.41 13.88 2.87 12.99 2.64 12.01C2.4 11.02 2.46 9.99 2.82 9.04C3.19 8.1 3.83 7.28 4.66 6.71C5.49 6.14 6.48 5.83 7.5 5.83L9.58 5.83L13.33 3.33L13.33 6.5Z"
				stroke={getTailwindColor(colorFill) || "#2e2e2e"}
				strokeOpacity="1.000000"
				strokeWidth="1.500000"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
