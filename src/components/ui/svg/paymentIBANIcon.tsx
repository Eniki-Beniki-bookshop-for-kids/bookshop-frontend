import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const PaymentIBANIcon: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customDarkGray") || "#2e2e2e",
	size = 22,
}) => {
	return (
		<div className="inline-block">
			<svg
				width={size}
				height={size}
				viewBox="0 0 22 22"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="Vector"
					d="M13.75 2.29L13.75 3.66C13.75 4.96 13.75 5.61 14.15 6.01C14.55 6.41 15.2 6.41 16.5 6.41L17.87 6.41"
					stroke={getTailwindColor(colorFill) || "#2e2e2e"}
					strokeOpacity="1.000000"
					strokeWidth="1.500000"
					strokeLinejoin="round"
					strokeLinecap="round"
				/>
				<path
					id="Vector"
					d="M3.66 7.33C3.66 4.74 3.66 3.44 4.47 2.63C5.27 1.83 6.57 1.83 9.16 1.83L12.99 1.83C13.36 1.83 13.55 1.83 13.72 1.9C13.88 1.97 14.02 2.1 14.28 2.37L17.79 5.87C18.06 6.14 18.19 6.27 18.26 6.44C18.33 6.61 18.33 6.8 18.33 7.17L18.33 14.66C18.33 17.25 18.33 18.55 17.52 19.36C16.72 20.16 15.42 20.16 12.83 20.16L9.16 20.16C6.57 20.16 5.27 20.16 4.47 19.36C3.66 18.55 3.66 17.25 3.66 14.66L3.66 7.33ZM7.33 10.08L14.66 10.08M7.33 12.83L14.66 12.83M7.33 15.58L11.15 15.58"
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
