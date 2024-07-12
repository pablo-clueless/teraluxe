import {
	InstagramLogo,
	Mailbox,
	MapPin,
	MessengerLogo,
	PhoneCall,
	TwitterLogo,
	WhatsappLogo,
} from "@phosphor-icons/react"

import { home_1, home_2, home_3, home_4 } from "@/assets"

export const data = [
	{
		image: home_1,
		title: "Discover the world with Teraluxe",
		description: "Find your dream vacation rental.",
		location: "London",
	},
	{
		image: home_2,
		title: "Try something different",
		description: "Unique vacation homes for the best price.",
		location: "New York",
	},
	{
		image: home_3,
		title: "Nothing short of a great vacation",
		description: "Browse our selection of stunning vacation rentals.",
		location: "Paris",
	},
	{
		image: home_4,
		title: "Experience the world",
		description: "Explore local attractions, book unique experiences.",
		location: "Tokyo",
	},
]

export const values = [
	{
		label: "Simplify vacation planning",
		description:
			"Our user-friendly platform streamlines the search process, allowing you to browse a curated selection of stunning vacation rentals and explore exciting local experiences, all in one place.",
	},
	{
		label: "Offer unparalleled choice",
		description:
			"Whether you seek a cozy cabin nestled in the mountains, a luxurious beachfront villa, or a charming apartment in a bustling city, Teraluxe caters to diverse travel styles and budgets.",
	},
	{
		label: "Craft personalized adventures",
		description:
			"Go beyond just booking a rental. Discover hidden gems, book unique activities, and build a custom itinerary that reflects your interests and travel preferences.",
	},
	{
		label: "A stress-free experience",
		description:
			"Teraluxe provides 24/7 customer support and secure booking options, so you can relax and focus on creating lasting memories with your loved ones.",
	},
]

export const contacts = [
	{
		title: "Chat with us",
		options: [
			{
				icon: MessengerLogo,
				href: "https://facebook.com/pablo-clueless",
				label: "Chat with us on Facebook",
			},
			{
				icon: InstagramLogo,
				href: "https://linkedin.com/in/samson-okunola",
				label: "Follow us on Instagram",
			},
			{
				icon: TwitterLogo,
				href: "https://twitter.com/pablo_clueless",
				label: "Follow us on Twitter",
			},
			{
				icon: Mailbox,
				href: "mailto:smsnmicheal@gmail.com",
				label: "Send us an email",
			},
			{
				icon: WhatsappLogo,
				href: "https://wa.me/+2349023966260",
				label: "Send us a WhatsApp message",
			},
		],
	},
	{
		title: "Call us",
		options: [
			{
				icon: PhoneCall,
				href: "tel:+2349023966260",
				label: "+2349023966260",
			},
		],
	},
	{
		title: "Visit us",
		options: [
			{
				icon: MapPin,
				href: "https://maps.app.goo.gl/gntSnCc47kjbP527A",
				label: "Fadeyi, Yaba, Lagos",
			},
		],
	},
]
