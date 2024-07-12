import Image from "next/image"
import Link from "next/link"
import React from "react"

import { links, socials } from "@/config"
import { logo_light } from "@/assets"

export const Footer = () => {
	return (
		<footer className="flex w-full items-center justify-center bg-secondary-100 px-4 py-5 text-accent-200 lg:px-0">
			<div className="flex w-full max-w-[1200px] flex-col">
				<div className="flex w-full flex-wrap items-start justify-between gap-10 lg:gap-20">
					<div className="flex max-w-[300px] flex-col items-start gap-5">
						<div className="relative aspect-[3/1] w-full">
							<Image src={logo_light} alt="logo" fill sizes="(max-width:1024px)100%" />
						</div>
						<p className="text-sm">
							Teraluxe is a web application designed to provide users with a seamless
							and user-friendly experience when searching for and booking vacation
							rentals and experiences
						</p>
					</div>
					<div className="flex flex-1 flex-wrap items-start gap-10">
						{links.map(({ label, sublinks }) => (
							<div
								key={label}
								className="flex min-w-[300px] flex-1 flex-col gap-4 lg:min-w-max">
								<p className="font-heading font-medium capitalize text-white">
									{label}
								</p>
								<div className="flex flex-col gap-2">
									{sublinks.map(({ href, name }) => (
										<Link
											key={name}
											href={href}
											className="link w-fit text-sm font-semibold capitalize text-primary transition-all duration-500">
											{name}
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
				<hr className="my-5 h-px border-0 bg-accent-200" />
				<div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between">
					<p className="text-sm">
						&copy;{new Date().getFullYear()}. All rights reserved. <b>Teraluxe</b>
					</p>
					<div className="flex items-center gap-5">
						{socials.map((social, index) => (
							<a key={index} href={social.href} target="_blank" className="">
								<social.icon size={20} weight="fill" />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}
