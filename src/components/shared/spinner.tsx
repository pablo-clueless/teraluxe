import { cva, type VariantProps } from "class-variance-authority"
import React from "react"

import { cn } from "@/lib/utils"

interface Props extends Omit<VariantProps<typeof spinnerVariants>, "size"> {
	className?: string
}

const spinnerVariants = cva("fill-none stroke-[3] animate-dash", {
	variants: {
		variant: {
			primary: "stroke-primary",
			secondary: "stroke-secondary-100",
			accent: "stroke-accent-200",
			alt: "stroke-alt",
		},
	},
	defaultVariants: {
		variant: "accent",
	},
})

export const Spinner = ({ className, variant }: Props) => {
	return (
		<svg
			viewBox="15 15 30 30"
			className={cn("size-8 origin-center animate-spin")}>
			<circle
				r={12}
				cx={30}
				cy={30}
				style={{
					strokeDasharray: "1, 200",
					strokeDashoffset: 0,
					strokeLinecap: "round",
				}}
				className={cn(spinnerVariants({ className, variant }))}
			/>
		</svg>
	)
}
