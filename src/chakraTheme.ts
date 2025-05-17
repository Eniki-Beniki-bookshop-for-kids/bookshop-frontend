//src/chakraTheme.ts
import { extendTheme } from "@chakra-ui/react"

import tailwindConfig from "../tailwind.config"
const colorsTW = tailwindConfig?.theme?.extend?.colors || {
	customViolet: "#8748FF",
	customLavender: "rgba(135, 72, 255, 0.5)",
	customYellow: "#FFCC00",
	customBlack: "#0E0E0E",
	customDarkGray: "#2E2E2E",
	customGray: "#6A6A6A",
	customLightGray: "#9C9C9C",
	customVeryLightGray: "#D0D0D0",
	customStroke: "#D8D8D8",
	customWhite: "#F2F2F2",
	customGreen: "#35A035",
}

const theme = extendTheme({
	colors: {
		...colorsTW,
	},
	fonts: {
		body: "Open Sans, sans-serif",
		heading: "Open Sans, sans-serif",
	},
	breakpoints: {
		base: "0px",
		sm: "425px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		"2xl": "1440px",
	},
})

export default theme
