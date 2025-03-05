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
				customViolet: "rgba(135, 72, 255)",
				customLavender: "rgba(135, 72, 255, 0.5)",
				customYellow: "rgba(255, 204, 0)",
				customBlack: "rgba(14, 14, 14)",
				customDarkGray: "rgba(46, 46, 46)",
				customGray: "rgba(106, 106, 106)",
				customLightGray: "rgba(156, 156, 156)",
				customVeryLightGray: "rgba(208, 208, 208)",
				customStroke: "rgba(216, 216, 216)",
				customWhite: "rgba(242, 242, 242)",
				customGreen: "rgba(53, 160, 53)",
			},
		},
	},
	plugins: [],
}
