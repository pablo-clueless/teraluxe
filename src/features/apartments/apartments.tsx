import { useQuery } from "@tanstack/react-query"
import React from "react"

import { Appbar, Card, Footer, Pagination, Seo } from "@/components/shared"
import { GetAllApartmentsQuery } from "@/query"

const LIMIT = 9

export const Apartments = () => {
	const [page, setPage] = React.useState(1)

	const { data } = useQuery({
		queryFn: () => GetAllApartmentsQuery({ limit: LIMIT, page }),
		queryKey: ["get-apartments"],
	})

	return (
		<>
			<Seo title="Invest in affordables home" />
			<Appbar />
			<main className="flex w-full flex-col items-center justify-center px-4 lg:px-0">
				<section className="flex w-full max-w-[1200px] flex-col gap-7 py-10">
					<div className="flex w-full items-center justify-between">
						<h4 className="text-2xl font-semibold">All Apartments</h4>
						<div className="flex items-center gap-5"></div>
					</div>
					<Pagination
						current={page}
						limit={LIMIT}
						onPageChange={(page) => setPage(page)}
						total={Number(data?.data?.total)}
					/>
					<div className="grid w-full grid-cols-3 gap-5">
						{data?.data?.data?.map((apartment) => (
							<Card key={apartment._id} apartment={apartment} />
						))}
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
