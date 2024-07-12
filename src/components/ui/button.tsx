import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
	"flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
	{
		variants: {
			variant: {
				default: "bg-primary text-accent-200 hover:bg-primary/90",
				destructive: "bg-red-500 text-accent-200 hover:bg-red-500/90",
				outline: "border border-accent-200 bg-transparent hover:text-accent-200/90",
				secondary: "bg-secondary-300 text-accent-200 hover:bg-secondary-300/80",
				ghost: "bg-accent-200 text-econdary-300 hover:bg-accent-200/90",
				link: "text-primary underline-offset-4 hover:underline",
				text: "text-primary hover:bg-white/45",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 px-3 rounded-md text-sm",
				lg: "h-11 px-8 rounded-lg text-xl",
				icon: "h-8 w-8 rounded-full",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button"
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = "Button"

export { Button, buttonVariants }
