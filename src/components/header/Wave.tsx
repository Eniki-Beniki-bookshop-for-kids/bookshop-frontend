import { IButtonProps } from "@/types/propsInterfaces"
import { getTailwindColor } from "@/utils"
import { FC } from "react"

export const Wave: FC<IButtonProps> = ({
	colorFill = getTailwindColor("customYellow") || "#FFCC00",
	height = 258,
	width = 1440,
	headerType = "full",
}) => {
	const scaleY = headerType === "minimal" ? 153 / 258 : 1 // Коефіцієнт масштабування

	return (
		<svg
			width="100%"
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			preserveAspectRatio="none"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ transform: `scaleY(${scaleY})`, transformOrigin: "top" }}
		>
			<path
				d="M1356.7 -85.7992H71.5871C-6.72164 -85.7992 -71.3853 -24.6144 -75.7115 53.5747L-77.0527 77.8137C-83.3133 190.965 43.6422 261.515 136.422 196.443C174.457 169.767 223.494 164.395 266.403 182.206L328.52 207.99C388.912 233.058 456.567 234.271 517.818 211.383L567.501 192.818C655.263 160.024 751.859 159.692 839.845 191.882L893.635 211.562C955.768 234.293 1024.3 231.994 1084.77 205.15L1131.29 184.499C1177.24 164.099 1230.21 167.103 1273.57 192.566L1279.97 196.329C1378.43 254.156 1503.04 186.42 1508.05 72.349C1511.84 -13.8475 1442.98 -85.7992 1356.7 -85.7992Z"
				fill={getTailwindColor(colorFill) || "#FFCC00"}
				className="wave-path"
			/>
		</svg>
	)
}
