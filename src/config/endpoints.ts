import { QueryParams } from "@labs/types"
import { queryString } from "@labs/utils"

const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? process.env.API_URL

const endpoints = (param?: string | null, queryParams?: QueryParams) => {
	let query = ""
	if (queryParams) {
		query = queryString(queryParams)
	}

	const auth = {
		signin: `${baseUrl}/auth/signin`,
		signup: `${baseUrl}/auth/signup`,
		verification: `${baseUrl}/auth/verification?${query}`,
		mfa: `${baseUrl}/auth/mfa?${query}`,
	}

	const apartments = {
		add: `${baseUrl}/apartments`,
		all: `${baseUrl}/apartments?${query}`,
		one: `${baseUrl}/apartments/${param}`,
		update: `${baseUrl}/apartments/${param}`,
		delete: `${baseUrl}/apartments/${param}`,
		book: `${baseUrl}/apartments/book/${param}`,
	}

	const contact = {
		send: `${baseUrl}/contact`,
	}

	const user = {
		update: `${baseUrl}/users/${param}`,
		upload: `${baseUrl}/users/upload/${param}`,
		bookings: `${baseUrl}/users/bookings`,
		booking: `${baseUrl}/users/bookings/${param}`,
	}

	return {
		auth,
		apartments,
		contact,
		user,
	}
}

export { endpoints }
