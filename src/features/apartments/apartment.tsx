import { ArrowLeft, Heart, MapPinSimple, Share } from "@phosphor-icons/react"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { toast } from "sonner"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Appbar, Footer, Rating, Seo, Spinner } from "@/components/shared"
import { BookApartmentMutation, GetApartmentByIdQuery } from "@/query"
import { Button } from "@/components/ui/button"
import { useUserStore } from "@/store/z-store"
import { formatCurrency } from "@labs/utils"
import { HttpError } from "@labs/types"

export const Apartment = () => {
	const { user } = useUserStore()
	const router = useRouter()
	const { id } = router.query

	const { isPending, mutateAsync } = useMutation({
		mutationFn: (id: string) => BookApartmentMutation(id),
		mutationKey: ["book-apartment"],
		onSuccess: (data) => {
			const { message } = data
			toast.success(message)
		},
		onError: ({ response }: HttpError) => {
			const { message } = response.data
			toast.error(message)
		},
	})

	const { data } = useQuery({
		queryFn: () => GetApartmentByIdQuery(String(id)),
		queryKey: ["get-apartment"],
		enabled: !!id,
	})

	const handleBooking = (id: string) => {
		if (!user) return toast.error("Please login to book an apartment")
		mutateAsync(id)
	}

	return (
		<>
			<Seo title={data?.data?.name} />
			<Appbar />
			<main className="flex w-full flex-col items-center justify-center px-4 text-secondary-100 lg:px-0">
				<section className="flex w-full max-w-[1200px] flex-col gap-5 py-10">
					<div className="mb-10 flex w-full items-center justify-between">
						<Link href="/apartments">
							<Button variant="link">
								<ArrowLeft /> Back to Apartments
							</Button>
						</Link>
						<div className="flex items-center gap-4">
							<h6 className="text-xl lg:text-2xl">
								{formatCurrency(Number(data?.data?.price), "USD")}
							</h6>
							<Button onClick={() => handleBooking(String(data?.data?._id))} size="lg">
								{isPending ? <Spinner /> : "Book"}
							</Button>
						</div>
					</div>
					<div className="flex w-full items-center justify-between">
						<div className="flex flex-col">
							<Rating rating={Number(data?.data?.rating)} />
							<h4 className="text-2xl lg:text-4xl">{data?.data?.name}</h4>
							<div className="flex items-center gap-1">
								<MapPinSimple size={16} />
								<p className="font-medium">{data?.data?.location}</p>
							</div>
						</div>
						<div className="flex items-center gap-5">
							<Button size="sm">
								<Heart size={16} /> Save
							</Button>
							<Button size="sm">
								<Share size={16} /> Share
							</Button>
						</div>
					</div>
					<div className="flex w-full flex-col items-center justify-center">
						<div className="grid w-full grid-cols-3 gap-5">
							{data?.data?.imageUrls
								.map((url, index) => (
									<div
										key={index}
										className={`relative aspect-[3/2] rounded-lg ${index === 0 ? "col-span-2" : "w-full"}`}>
										<Image
											src={url}
											alt="logo"
											fill
											sizes="(max-width:1024px)100%"
											className="rounded-lg object-cover"
										/>
									</div>
								))
								.slice(0, 3)}
						</div>
					</div>
					<div className="flex w-full flex-col items-start gap-4">
						<h5 className="text-xl lg:text-2xl">Overview</h5>
						<div className="w-full">
							<p className="text-lg">{data?.data?.description}</p>
						</div>
					</div>
					<hr className="w-full border-secondary-400" />
					<div className="flex w-full flex-col items-start gap-4">
						<h5 className="text-xl lg:text-2xl">Details</h5>
						<div className="flex w-full flex-wrap items-center gap-4">
							<span className="rounded-full bg-secondary-200 px-4 py-2 text-lg text-accent-200">
								{data?.data?.bathrooms} Bathrooms
							</span>
							<span className="rounded-full bg-secondary-200 px-4 py-2 text-lg text-accent-200">
								{data?.data?.bedrooms} Bedrooms
							</span>
							<span className="rounded-full bg-secondary-200 px-4 py-2 text-lg text-accent-200">
								{data?.data?.size} sqft
							</span>
						</div>
					</div>
					<hr className="w-full border-secondary-400" />
					<div className="flex w-full flex-col items-start gap-4">
						<h5 className="text-xl lg:text-2xl">Amenities</h5>
						<div className="flex w-full flex-wrap items-center gap-4">
							{data?.data?.amenities.map((amenity, index) => (
								<span
									key={index}
									className="rounded-full bg-secondary-200 px-4 py-2 text-lg text-accent-200">
									{amenity}
								</span>
							))}
						</div>
					</div>
					<hr className="w-full border-secondary-400" />
					<div className="flex w-full flex-col items-start gap-4">
						<h5 className="text-xl lg:text-2xl">Reviews</h5>
						<div className="flex w-full flex-wrap items-center gap-4"></div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
