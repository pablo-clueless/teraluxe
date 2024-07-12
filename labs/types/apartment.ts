export type ApartmentProps = {
	_id: string
	name: string
	description: string
	price: number
	imageUrls: string[]
	location: string
	bedrooms: number
	bathrooms: number
	amenities: string[]
	size: number
	rating: number
	available: boolean
	createdAt: Date
	updatedAt: Date
}
