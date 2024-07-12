import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: string
	wrapperClassName?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, error, wrapperClassName, ...props }, ref) => {
		return (
			<div className={cn("flex min-h-[80px] w-full flex-col", wrapperClassName)}>
				<textarea
					className={cn(
						"flex h-full w-full resize-none rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm text-secondary-100 placeholder:text-neutral-500 focus-visible:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
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
Textarea.displayName = "Textarea"

export { Textarea }
