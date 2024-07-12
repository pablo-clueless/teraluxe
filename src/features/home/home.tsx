import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Appbar, Card, Footer, Seo } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { GetAllApartmentsQuery } from "@/query"
import { Carousel } from "./carousel"
import { icon_dark } from "@/assets"

export const Home = () => {
	const { data } = useQuery({
		queryFn: () => GetAllApartmentsQuery({ limit: 3 }),
		queryKey: ["get-apartments"],
	})

	return (
		<>
			<Seo title="The best holiday homes" />
			<Appbar />
			<main className="flex w-full flex-col items-center justify-center">
				<section className="flex w-full items-center justify-center px-0 py-4 lg:px-4">
					<Carousel />
				</section>
				<section className="flex w-full max-w-[1200px] flex-col gap-5 px-4 py-10 lg:px-0">
					<div className="flex w-full items-center justify-between">
						<h4 className="text-2xl font-semibold uppercase">Popular</h4>
						<Link href="/apartments">
							<Button size="sm" variant="secondary">
								View All
							</Button>
						</Link>
					</div>
					<div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
						{data?.data?.data?.map((apartment) => (
							<Card key={apartment._id} apartment={apartment} />
						))}
					</div>
				</section>
				<section className="flex w-full max-w-[1200px] flex-col gap-5 px-4 py-10 lg:px-0">
					<div className="flex w-full items-center justify-between">
						<h4 className="text-2xl font-semibold uppercase">Offer of the week</h4>
					</div>
					<div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
						{data?.data?.data?.map((apartment) => (
							<Card key={apartment._id} apartment={apartment} />
						))}
					</div>
				</section>
				<section className="flex w-full max-w-[1200px] flex-col gap-5 px-4 py-10 lg:px-0">
					<div className="flex w-full items-center justify-between">
						<h4 className="text-2xl font-semibold uppercase">Explore by locations</h4>
					</div>
					<div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
						{data?.data?.data?.map((apartment) => (
							<Card key={apartment._id} apartment={apartment} />
						))}
					</div>
				</section>
				<section className="flex w-full max-w-[1200px] flex-col gap-5 px-4 py-10 lg:px-0">
					<div className="flex w-full items-center justify-between">
						<h4 className="text-2xl font-semibold uppercase">Testimonials</h4>
					</div>
				</section>
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
