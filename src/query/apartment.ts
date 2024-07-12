import { ApartmentProps, BaseResponse, PaginatedData } from "@labs/types"
import { instance } from "@labs/utils"
import { endpoints } from "@/config"

interface AddApartmentMutationProps {
	name: string
	description: string
	price: number
	images: File[]
	location: string
	bedrooms: number
	bathrooms: number
	amenities: string[]
	size: number
}

interface UpdateApartmentMutationProps
	extends Omit<AddApartmentMutationProps, "size" | "location"> {
	id: string
}

const AddApartmentMutation = async (payload: AddApartmentMutationProps) => {
	return instance
		.post<BaseResponse<ApartmentProps>>(endpoints().apartments.add, payload)
		.then((res) => res.data)
}

const GetAllApartmentsQuery = async (payload?: {
	limit?: number
	page?: number
	sort?: string
}) => {
	return instance
		.get<
			BaseResponse<PaginatedData<ApartmentProps>>
		>(endpoints(null, payload).apartments.all)
		.then((res) => res.data)
}

const GetApartmentByIdQuery = async (id: string) => {
	return instance
		.get<BaseResponse<ApartmentProps>>(endpoints(id).apartments.one)
		.then((res) => res.data)
}

const BookApartmentMutation = async (id: string) => {
	return instance
		.post<BaseResponse<ApartmentProps>>(endpoints(id).apartments.book)
		.then((res) => res.data)
}

const UpdateApartmentMutation = async (
	payload: UpdateApartmentMutationProps
) => {
	return instance
		.put<
			BaseResponse<ApartmentProps>
		>(endpoints(payload.id).apartments.update, payload)
		.then((res) => res.data)
}

const DeleteApartmentMutation = async (id: string) => {
	return instance
		.delete<BaseResponse<ApartmentProps>>(endpoints(id).apartments.delete)
		.then((res) => res.data)
}

export {
	AddApartmentMutation,
	BookApartmentMutation,
	GetAllApartmentsQuery,
	GetApartmentByIdQuery,
	UpdateApartmentMutation,
	DeleteApartmentMutation,
}
