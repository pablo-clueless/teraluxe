import { Star } from "@phosphor-icons/react"
import React from "react"

interface Props {
	rating: number
}

export const Rating = ({ rating }: Props) => {
	return (
		<div className="flex items-center gap-3">
			<div className="flex items-center gap-[2px]">
				{Array.from({ length: 5 }, (_, index) => (
					<Star
						key={index}
						size={16}
						weight="fill"
						className={`${index < rating ? "text-amber-500" : "text-gray-300"}`}
					/>
				))}
			</div>
			<span className="font-medium">{rating}</span>
		</div>
	)
}
