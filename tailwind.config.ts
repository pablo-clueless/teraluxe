import type { Config } from "tailwindcss"

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		fontFamily: {
			heading: ["Belleza", "sans-serif"],
			base: ["Figtree", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				"home-1": "url('/assets/images/home-1.webp')",
				"icon-dark": "url('/assets/images/icon-dark.webp')",
				"icon-light": "url('/assets/images/icon-light.webp')",
				"logo-dark": "url('/assets/images/logo-dark.webp')",
				"logo-light": "url('/assets/images/logo-light.webp')",
				wave: "url('/assets/images/wave.webp')",
			},
			colors: {
				primary: "#4b6dcF",
				secondary: {
					"100": "#151419",
					"200": "#1b1b1e",
					"300": "#262626",
					"400": "#878787",
				},
				accent: {
					"100": "#fbfbfb",
					"200": "#f9f9f9",
				},
				alt: "#f56e0f",
			},
			strokeWidth: {
				1: "1",
				2: "2",
				3: "3",
				4: "4",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				dash: {
					"0%": {
						"stroke-dasharray": "1, 200",
						"stroke-dashoffset": "0",
					},
					"50%": {
						"stroke-dasharray": "90, 200",
						"stroke-dashoffset": "-35px",
					},
					"100%": {
						"stroke-dashoffset": "-125px",
					},
				},
				"dash-lg": {
					"0%": {
						"stroke-dasharray": "1, 800",
						"stroke-dashoffset": "0",
					},
					"50%": {
						"stroke-dasharray": "360, 800",
						"stroke-dashoffset": "-140px",
					},
					"100%": {
						"stroke-dashoffset": "-500px",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				dash: "dash 1.5s ease-in-out infinite",
				"dash-lg": "dash-lg 1.5s ease-in-out infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
