import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const CommentIcon: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customDarkGray") || "#2e2e2e",
	size = 18,
}) => {
	return (
		<div className="inline-block">
			<svg
				width={size}
				height={size}
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="Vector"
					d="M12.75 14.61C13.86 13.87 14.72 12.81 15.23 11.58C15.74 10.34 15.88 8.99 15.62 7.68C15.35 6.37 14.71 5.17 13.77 4.22C12.82 3.28 11.62 2.64 10.31 2.37C9 2.11 7.65 2.25 6.41 2.76C5.18 3.27 4.12 4.13 3.38 5.24C2.64 6.35 2.25 7.66 2.25 9C2.25 10.11 2.52 11.16 3 12.09L2.25 15.75L5.9 15C6.83 15.47 7.88 15.75 9 15.75C10.33 15.75 11.64 15.35 12.75 14.61Z"
					stroke={getTailwindColor(colorFill) || "#2e2e2e"}
					strokeOpacity="1.000000"
					strokeWidth="1.000000"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	)
}
