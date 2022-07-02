/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors:{
				purp : "#4F46E5",
				gold : "#F7D000",
				grey : "#F0F0F0"
			}
		},
	},
	plugins: [],
};
