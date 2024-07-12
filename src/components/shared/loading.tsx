import React from "react"

export const Loading = () => {
	return (
		<main className="grid h-screen w-full place-items-center">
			<svg
				viewBox="100 100 200 200"
				className="size-36 origin-center animate-spin">
				<circle
					r={80}
					cx={200}
					cy={200}
					style={{
						strokeDasharray: "1, 800",
						strokeDashoffset: 0,
						strokeLinecap: "round",
					}}
					className="animate-dash-lg stroke-primary fill-none stroke-[10]"
				/>
			</svg>
		</main>
	)
}
