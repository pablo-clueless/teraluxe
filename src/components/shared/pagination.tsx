import { CaretLeft, CaretRight } from "@phosphor-icons/react"
import React from "react"

interface Props {
	current: number
	limit: number
	onPageChange: (page: number) => void
	total: number
}

export const Pagination = ({ current, limit, onPageChange, total }: Props) => {
	const totalPages = Math.ceil(total / limit)

	const handlePrevPage = () => {
		if (current > 1) {
			return onPageChange(current - 1)
		}
	}

	const handleNextPage = () => {
		if (current < totalPages) {
			return onPageChange(current + 1)
		}
	}

	return (
		<div className="my-4 flex items-center justify-center gap-4">
			<button
				onClick={handlePrevPage}
				disabled={current === 1}
				className={`text-accent-200 disabled:text-secondary-100 bg-primary grid place-items-center p-2 disabled:cursor-not-allowed disabled:bg-gray-300`}>
				<CaretLeft size={20} />
			</button>
			<span className="text-secondary-100 font-medium">
				{current} of {totalPages}
			</span>
			<button
				onClick={handleNextPage}
				disabled={current === totalPages}
				className={`text-accent-200 disabled:text-secondary-100 bg-primary grid place-items-center p-2 disabled:cursor-not-allowed disabled:bg-gray-300`}>
				<CaretRight size={20} />
			</button>
		</div>
	)
}
