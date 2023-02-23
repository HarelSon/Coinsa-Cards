/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Open Sans", "sans-serif"]
			},
			colors:{
				as:{
					blue: "rgb(0, 95, 226)",
					"blue-dark": "#273475",
					green: "#16993b",
					black: "rgb(51, 51, 51)",
				}
			}
		},
	},
	plugins: [],
}
