import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const LogoutIcon: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customDarkGray") || "#2e2e2e",
	size = 20,
}) => {
	return (
		<div className="inline-block">
			<svg
				width={size - 1}
				height={size}
				viewBox="0 0 19 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs />
				<rect
					id="iconamoon:exitLight"
					rx="9.000000"
					width={size - 1}
					height={size}
					transform="translate(0.500000 0.500000)"
					fill="transparent"
					fillOpacity="1.000000"
				/>
				<path
					id="Vector"
					d="M12 3.33L3.66 3.33L3.66 15C3.66 15.44 3.84 15.86 4.15 16.17C4.46 16.49 4.89 16.66 5.33 16.66L12 16.66M12.83 12.5L15.33 10L12.83 7.5M15.33 10L7 10"
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
