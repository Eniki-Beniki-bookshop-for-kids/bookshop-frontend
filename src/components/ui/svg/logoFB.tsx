import { IButtonProps } from "@/types/propsInterfaces"
import { FC } from "react"

export const LogoFB: FC<IButtonProps> = ({ size = 24 }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9861 5.851 30.6053 13.5 31.8056V20.625H9.4375V16H13.5V12.475C13.5 8.465 15.8887 6.25 19.5434 6.25C21.294 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1074C19.1199 10.5 18.5 11.7333 18.5 12.9986V16H22.9375L22.2281 20.625H18.5V31.8056C26.1491 30.6053 32 23.9861 32 16Z"
				fill="#1877F2"
			/>
		</svg>
	)
}
