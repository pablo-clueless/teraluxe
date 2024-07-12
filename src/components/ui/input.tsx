import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: string
	wrapperClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, error, wrapperClassName, ...props }, ref) => {
		return (
			<div className={cn("flex w-full flex-col", wrapperClassName)}>
				<input
					type={type}
					className={cn(
						"text-secondary-100 focus-visible:border-primary flex h-10  w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm outline-none transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
						className
					)}
					ref={ref}
					{...props}
				/>
				{error && <span className="text-xs text-red-500">{error}</span>}
			</div>
		)
	}
)
Input.displayName = "Input"

export { Input }
