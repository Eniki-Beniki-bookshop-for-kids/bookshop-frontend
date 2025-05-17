import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const SuccessCircleIcon: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customGreen") || "#35A035",
	size = 16,
}) => {
	return (
		<svg width={size} height={size} viewBox="0 0 16 16" fill="none">
			<g clipPath="url(#clip120_1778)">
				<path
					id="Vector"
					d="M10.67 14.46C11.52 14.11 12.3 13.6 12.94 12.94C13.6 12.3 14.11 11.52 14.46 10.67C14.82 9.82 15 8.91 15 8C15 7.08 14.82 6.17 14.46 5.32C14.11 4.47 13.6 3.69 12.94 3.05C12.3 2.39 11.52 1.88 10.67 1.53C9.82 1.17 8.91 0.99 8 1C7.08 0.99 6.17 1.17 5.32 1.53C4.47 1.88 3.69 2.39 3.05 3.05C2.39 3.69 1.88 4.47 1.53 5.32C1.17 6.17 0.99 7.08 1 8C0.99 8.91 1.17 9.82 1.53 10.67C1.88 11.52 2.39 12.3 3.05 12.94C3.69 13.6 4.47 14.11 5.32 14.46C6.17 14.82 7.08 15 8 15C8.91 15 9.82 14.82 10.67 14.46Z"
					stroke={getTailwindColor(colorFill) || "#35A035"}
					strokeOpacity="1.000000"
					strokeWidth="2.000000"
					strokeLinejoin="round"
				/>
				<path
					id="Vector"
					d="M5.33 8L7.33 10L11.33 6"
					stroke={getTailwindColor(colorFill) || "#35A035"}
					strokeOpacity="1.000000"
					strokeWidth="2.000000"
					strokeLinejoin="round"
					strokeLinecap="round"
				/>
			</g>
		</svg>
	)
}
