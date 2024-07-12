import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

import { useInterval } from "@labs/hooks"
import { data } from "./data"

const initial = { opacity: 0.5 }
const whileInView = { opacity: 1 }
const exit = { opacity: 0.5 }
const transition = {
	type: "spring",
	delay: 0.1,
	duration: 0.5,
	easings: ["easeIn", "easeOut"],
}

export const Carousel = () => {
	const [current, setCurrent] = React.useState(0)

	useInterval(() => {
		setCurrent((prev) => (prev + 1) % data.length)
	}, 3000)

	return (
		<div className="flex w-full flex-col items-center justify-center gap-6">
			<div className="flex h-[60vh] w-full items-center justify-center rounded-xl border border-primary/50">
				{data.map((item, index) => (
					<motion.div
						key={index}
						initial={initial}
						whileInView={whileInView}
						exit={exit}
						transition={transition}
						className={`relative h-full w-full rounded-xl ${index === current ? "block" : "hidden"}`}>
						<Image
							src={item.image}
							alt={item.title}
							fill
							sizes="(max-width:1024px)100%"
							className="rounded-xl object-cover"
						/>
						<div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-xl bg-secondary-100/50 text-white">
							<div className="flex h-full w-full max-w-[1200px] flex-col justify-between px-2 py-10 lg:px-0">
								<div className="w-fit rounded-md bg-secondary-100 px-3 py-2 text-white">
									<p className="text-xs font-bold lg:text-sm">{item.location}</p>
								</div>
								<div className="flex flex-col">
									<h6 className="text-xl lg:text-3xl">{item.title}</h6>
									<p className="text-sm font-semibold lg:text-lg">{item.description}</p>
								</div>
								<div className=""></div>
							</div>
						</div>
					</motion.div>
				))}
			</div>
			<div className="flex items-center justify-center gap-4">
				{data.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrent(index)}
						className={`h-1 w-12 rounded-md border border-primary transition-all duration-500 lg:h-2 lg:w-20 lg:border-2 ${index === current ? "bg-primary" : "bg-transparent"}`}></button>
				))}
			</div>
		</div>
	)
}
