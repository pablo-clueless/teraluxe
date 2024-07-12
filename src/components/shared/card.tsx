import { ListStar, NavigationArrow, Star } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Button } from "@/components/ui/button"
import { ApartmentProps } from "@labs/types"
import { formatCurrency } from "@labs/utils"

interface CardProps {
	apartment: ApartmentProps
}

export const Card = ({ apartment }: CardProps) => {
	const [current, setCurrent] = React.useState(0)

	return (
		<div className="flex w-full flex-col gap-4">
			<div className="relative flex aspect-[3/2] w-full items-center justify-center overflow-hidden">
				{apartment.imageUrls.map((url, index) => (
					<div
						key={index}
						className={`relative aspect-[3/2] w-full rounded-lg ${current === index ? "block" : "hidden"}`}>
						<Image
							src={url}
							alt="logo"
							fill
							sizes="(max-width:1024px)100%"
							className="rounded-lg object-cover"
						/>
					</div>
				))}
				<div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2">
					{apartment.imageUrls.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrent(index)}
							className={`size-3 rounded-full border-4 border-secondary-100 ${current === index ? "bg-primary" : "bg-secondary-100"}`}></button>
					))}
				</div>
			</div>
			<div className="flex w-full flex-col gap-2">
				<h5 className="font-semibold">{apartment.name}</h5>
				<div className="flex w-full items-center justify-between">
					<div className="flex items-center gap-1 rounded-2xl bg-gray-500 px-2 py-1 text-secondary-300">
						<Star size={18} />
						<span className="text-xs font-semibold">{apartment.rating}</span>
					</div>
					<div className="flex items-center gap-1 rounded-2xl bg-gray-500 px-2 py-1 text-secondary-300">
						<NavigationArrow size={18} />
						<span className="text-xs font-semibold">{apartment.location}</span>
					</div>
					<div className="flex items-center gap-1 rounded-2xl bg-gray-500 px-2 py-1 text-secondary-300">
						<ListStar size={18} />
						<span className="text-xs font-semibold">
							{apartment.amenities.length}
						</span>
					</div>
				</div>
				<div className="flex w-full items-center justify-between">
					<h4 className="text-xl font-semibold">
						{formatCurrency(apartment.price, "USD")}
					</h4>
					<Link href={`/apartments/${apartment._id}`}>
						<Button size="sm" variant="secondary" className="w-20">
							View
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
