const production = process.env.NODE_ENV === "production";

module.exports = {
	plugins: [
		require("@tailwindcss/aspect-ratio"),
	],
	purge: {
		content: [
			"./src/**/*.html",
			
			"./src/**/*.svelte",
			
			"./pages/**/*.js",
			"./components/**/*.js"
		],
		layers: [
			"utilities"
		],
		enabled: production,
	},
}
