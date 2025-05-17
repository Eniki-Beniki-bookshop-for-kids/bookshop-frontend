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
				customViolet: "#8748FF", // rgb(135, 72, 255)
				customLavender: "rgba(135, 72, 255, 0.5)",
				customYellow: "#FFCC00", // rgb(255, 204, 0)
				customBlack: "#0E0E0E", // rgb(14, 14, 14)
				customGray: "#6A6A6A", // rgb(106, 106, 106)
				customDarkGray: "#2E2E2E", // rgb(46, 46, 46)
				customBgGray: "#F6F6F6", // rgb(246, 246, 246)
				customMediumGray: "#FDFDFD", // rgb(253, 253, 253)
				customLightGray: "#9C9C9C", // rgb(156, 156, 156)
				customVeryLightGray: "#D0D0D0", // rgb(208, 208, 208)
				customStroke: "#D8D8D8", // rgb(216, 216, 216)
				customWhite: "#F2F2F2", // rgb(242, 242, 242)
				customGreen: "#35A035", // rgb(53, 160, 53)
				customYellow: "#FFCC00", // rgb(255, 204, 0)
			},
		},
	},
	plugins: [],
}
