import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const PhoneIcon: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customBlack") || "#0e0e0e",
	size = 24,
	isHovered = false,
}) => {
	return (
		<svg
			display="block"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`flex items-center justify-center ${
				isHovered ? "animate-wiggle" : ""
			}`}
		>
			<path
				id="Vector"
				d="M5.73 2.04C6.95 0.83 8.95 1.04 9.97 2.41L11.23 4.09C12.06 5.2 11.99 6.75 11 7.72L10.76 7.96C10.74 8.06 10.73 8.17 10.76 8.27C10.82 8.68 11.16 9.54 12.59 10.96C14.02 12.38 14.89 12.72 15.3 12.78C15.4 12.81 15.51 12.8 15.61 12.78L16.02 12.37C16.9 11.5 18.24 11.34 19.33 11.93L21.24 12.97C22.87 13.85 23.29 16.08 21.95 17.41L20.52 18.82C20.08 19.27 19.48 19.64 18.74 19.71C16.93 19.88 12.71 19.66 8.28 15.25C4.14 11.14 3.35 7.55 3.25 5.78C3.2 4.89 3.62 4.13 4.16 3.6L5.73 2.04ZM8.77 3.3C8.26 2.63 7.32 2.57 6.79 3.1L5.22 4.66C4.89 4.99 4.73 5.35 4.75 5.7C4.83 7.1 5.47 10.34 9.34 14.19C13.4 18.23 17.15 18.35 18.6 18.21C18.9 18.19 19.19 18.03 19.47 17.76L20.89 16.35C21.47 15.77 21.34 14.73 20.52 14.28L18.61 13.24C18.08 12.96 17.46 13.05 17.08 13.43L16.62 13.89L16.1 13.35C16.62 13.89 16.62 13.89 16.62 13.89L16.62 13.89L16.62 13.89L16.61 13.9L16.6 13.91C16.56 13.95 16.51 13.99 16.46 14.02C16.38 14.07 16.27 14.13 16.14 14.18C15.87 14.28 15.51 14.33 15.07 14.27C14.21 14.13 13.06 13.54 11.53 12.02C10 10.51 9.41 9.36 9.27 8.5C9.2 8.06 9.26 7.7 9.36 7.43C9.42 7.28 9.5 7.13 9.6 7.01L9.63 6.97L9.64 6.96L9.65 6.95L9.65 6.95L9.66 6.95L9.94 6.66C10.37 6.23 10.43 5.53 10.03 4.99L8.77 3.3Z"
				fill={getTailwindColor(colorFill) || "#0e0e0e"}
				fillOpacity="1.000000"
				fillRule="evenodd"
			/>
		</svg>
	)
}
