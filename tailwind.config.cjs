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
					blue: "#005fe2",
					green: "#16993b",
					black: "#3e3e3e"
				}
			}
		},
	},
	plugins: [],
}
