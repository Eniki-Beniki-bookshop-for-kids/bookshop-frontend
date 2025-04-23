/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				customViolet: "#8748FF",
				customLavender: "rgba(135, 72, 255, 0.5)",
				customYellow: "#FFCC00",
				customBlack: "#0E0E0E",
				customDarkGray: "#2E2E2E",
				customGray: "#6A6A6A",
				customLightGray: "#9C9C9C",
				customMediumGray: "#FDFDFD",
				customVeryLightGray: "#D0D0D0",
				customStroke: "#D8D8D8",
				customWhite: "#F2F2F2",
				customGreen: "#35A035",
			},
		},
	},
	plugins: [],
}
