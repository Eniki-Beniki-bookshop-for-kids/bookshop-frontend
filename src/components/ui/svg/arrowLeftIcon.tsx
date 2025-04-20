import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const ArrowLeftIcon: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customBlack") || "#0E0E0E",
	size = 16,
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
				d="M13.3839 17.955C13.6183 17.7206 13.7499 17.4027 13.7499 17.0713C13.7499 16.7398 13.6183 16.4219 13.3839 16.1875L7.19643 10L13.3839 3.8125C13.6116 3.57675 13.7376 3.26099 13.7348 2.93325C13.7319 2.6055 13.6005 2.29199 13.3687 2.06023C13.1369 1.82847 12.8234 1.69701 12.4957 1.69416C12.1679 1.69131 11.8522 1.8173 11.6164 2.045L4.54518 9.11625C4.31084 9.35066 4.1792 9.66855 4.1792 10C4.1792 10.3315 4.31084 10.6493 4.54518 10.8838L11.6164 17.955C11.8508 18.1893 12.1687 18.321 12.5002 18.321C12.8316 18.321 13.1495 18.1893 13.3839 17.955Z"
				fill={getTailwindColor(colorFill) || "#0E0E0E"}
			/>
		</svg>
	)
}
