import Link from "next/link"
import React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Props {
	message: string
	color?: "error" | "success" | "warning"
}

const text = {
	error: "text-red-700",
	success: "text-green-700",
	warning: "text-yellow-700",
}

const link = {
	error: "bg-red-700 hover:bg-red-700/90",
	success: "bg-green-700 hover:bg-green-700/90",
	warning: "bg-yellow-700 hover:bg-yellow-700/90",
}

export const Modal = ({ message, color = "error" }: Props) => {
	return (
		<main className="grid h-screen w-full place-items-center">
			<div className="flex aspect-square w-full max-w-[90%] flex-col items-center justify-center gap-10 rounded-lg border bg-accent-200 px-4 py-10 shadow-2xl lg:max-w-[500px]">
				<h4
					className={cn(
						"text-center text-2xl font-medium lg:text-2xl",
						text[color]
					)}>
					{message}
				</h4>
				<Link href="/">
					<Button size="lg" className={cn(link[color])}>
						Go back Home
					</Button>
				</Link>
			</div>
		</main>
	)
}
