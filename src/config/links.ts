import { GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react"

export const links = [
	{
		label: "explore",
		sublinks: [
			{ name: "apartments in lagos", href: "/apartments?location=lagos" },
			{ name: "apartments in abuja", href: "/apartments?location=abuja" },
			{ name: "apartments in london", href: "/apartments?location=london" },
			{ name: "apartments in new york", href: "/apartments?location=new-york" },
		],
	},
	{
		label: "company",
		sublinks: [
			{ name: "home", href: "/" },
			{ name: "about", href: "/about" },
			{ name: "contact", href: "/contact" },
		],
	},
	{
		label: "help",
		sublinks: [
			{ name: "faqs", href: "/" },
			{ name: "terms", href: "/" },
			{ name: "privacy", href: "/" },
		],
	},
]

export const socials = [
	{
		icon: GithubLogo,
		href: "https://github.com/pablo-clueless",
	},
	{
		icon: LinkedinLogo,
		href: "https://linkedin.com/in/samson-okunola",
	},
	{
		icon: TwitterLogo,
		href: "https://twitter.com/pablo_clueless",
	},
]
