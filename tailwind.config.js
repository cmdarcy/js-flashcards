/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const backfaceVisibility = plugin(function ({ addUtilities }) {
	addUtilities({
		".backface-visible": {
			"backface-visibility": "visible",
		},
		".backface-hidden": {
			"backface-visibility": "hidden",
		},
	});
});
const transitionCustom = plugin(function ({ addUtilities }) {
	addUtilities({
		".transition-custom": {
			transition: "transform 0.999s",
		},
	});
});

export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			charcoal: "#454851ff",
			asparagus: "#73956fff",
			cambridge_blue: "#7bae7fff",
			celadon: "#95d7aeff",
			blush: "#FCEFF9",
			white: "white",
		},
		extend: {},
	},
	plugins: [backfaceVisibility, transitionCustom],
};
