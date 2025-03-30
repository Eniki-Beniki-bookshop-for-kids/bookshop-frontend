import { IButtonProps } from "@/types/propsInterfaces"
import { FC } from "react"

export const FlagUkraine: FC<IButtonProps> = ({ size = 24 }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				id="Vector"
				d="M0.84 3.75L23.15 3.75C23.41 3.75 23.62 3.95 23.62 4.21L23.62 19.78C23.62 20.04 23.41 20.25 23.15 20.25L0.84 20.25C0.58 20.25 0.37 20.04 0.37 19.78L0.37 4.21C0.37 3.95 0.58 3.75 0.84 3.75Z"
				fill="#2A75E6"
				fillOpacity="1.000000"
				fillRule="evenodd"
			/>
			<path
				id="Vector"
				d="M0.37 12L23.62 12L23.62 19.78C23.62 19.9 23.57 20.02 23.48 20.11C23.39 20.2 23.28 20.25 23.15 20.25L0.84 20.25C0.71 20.25 0.6 20.2 0.51 20.11C0.42 20.02 0.37 19.9 0.37 19.78L0.37 12Z"
				fill="#F9D549"
				fillOpacity="1.000000"
				fillRule="nonzero"
			/>
		</svg>
	)
}
