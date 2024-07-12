import Image from "next/image"
import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import { icon_dark, logo_dark } from "@/assets"
import { Button } from "@/components/ui/button"
import { socials } from "@/config"
import { values } from "./data"

export const About = () => {
	return (
		<>
			<Seo title="About Teraluxe" />
			<Appbar />
			<main className="flex w-full flex-col items-center justify-center">
				<section className="flex w-full items-center justify-center bg-primary px-4 py-4">
					<div className="bg-wave grid h-[30vh] w-full place-items-center rounded-xl border bg-cover bg-center">
						<div className="relative aspect-[3/1] w-[200px] lg:w-[350px]">
							<Image src={logo_dark} alt="logo" fill sizes="(max-width:1024px)100%" />
						</div>
					</div>
				</section>
				<section className="flex w-full max-w-[1200px] flex-col gap-5 px-4 py-10 lg:px-0">
					<h4 className="text-2xl font-semibold uppercase lg:text-4xl">Teraluxe</h4>
					<p className="font-medium lg:max-w-[50%] lg:text-lg">
						At Teraluxe, we believe that travel should be a source of joy and
						discovery, not stress and hassle. That&apos;s why we&apos;ve created a
						seamless platform that empowers you to curate the perfect vacation
						experience, from finding your dream rental to crafting an unforgettable
						itinerary.
					</p>
				</section>
				<section className="flex w-full max-w-[1200px] flex-col gap-5 px-4 py-10 lg:px-0">
					<h4 className="text-2xl font-semibold uppercase lg:text-4xl">
						Our Values
					</h4>
					<div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-4">
						{values.map(({ description, label }) => (
							<div key={label} className="flex flex-col gap-2">
								<h6 className="text-lg lg:text-2xl">{label}</h6>
								<p className="font-medium lg:text-lg">{description}</p>
							</div>
						))}
					</div>
				</section>
				<section className="flex w-full max-w-[1200px] flex-col gap-5 px-4 py-10 lg:px-0">
					<h4 className="text-2xl font-semibold uppercase lg:text-4xl">
						Join the Teraluxe Community
					</h4>
					<p className="font-medium lg:max-w-[50%] lg:text-lg">
						We&apos;re more than just a booking platform. Teraluxe is a community of
						passionate travelers who share a love for exploration and adventure.
						We&apos;re committed to providing exceptional service, valuable resources,
						and a platform that empowers you to turn travel dreams into reality.
					</p>
					<div className="flex items-center gap-5">
						{socials.map((social, index) => (
							<a key={index} href={social.href} target="_blank" className="">
								<social.icon size={28} weight="fill" />
							</a>
						))}
					</div>
				</section>
				<section className="flex w-full max-w-[1200px] flex-col gap-5 px-4 py-10 lg:px-0"></section>
				<section className="flex w-full items-center justify-center overflow-hidden bg-primary py-5 lg:max-h-[200px] lg:py-0">
					<div className="flex w-full max-w-[1200px] flex-col items-center justify-between lg:flex-row">
						<div className="relative aspect-square w-[275px] min-w-[275px] rotate-[15deg]">
							<Image src={icon_dark} alt="logo" fill sizes="(max-width:1024px)100%" />
						</div>
						<div className="flex w-full flex-col items-center justify-center text-center lg:text-left">
							<h4 className="text-xl font-bold text-accent-200 lg:text-3xl">
								Book your next holiday home today
							</h4>
							<p className="font-light text-accent-100 lg:mt-2 lg:text-lg">
								Enjoy a discount on your next booking with us
							</p>
						</div>
						<Button size="lg" variant="secondary">
							Book Now
						</Button>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
