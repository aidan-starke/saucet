module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {},
		tooltipArrows: (theme) => ({
			"danger-arrow": {
				borderColor: theme("colors.yellow.400"),
				borderWidth: 1,
				backgroundColor: "white",
				size: 10,
				offset: 10,
			},
		}),
	},
	plugins: [
		require("tailwindcss-tooltip-arrow-after")(),
		require("flowbite/plugin"),
	],
	important: true,
};
