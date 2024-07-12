export type QueryParams = {
	[key: string]: string | number | boolean
}

export type BaseResponse<T> = {
	error: boolean
	message: string
	data: T
}

export type HttpError = {
	response: {
		data: {
			message: string
			status: string
			data?: any
			stack?: string
		}
	}
}

export type PaginatedData<T> = {
	data: T[]
	limit: number
	page: number
	total: number
}

export type Currency =
	| "USD"
	| "CAD"
	| "EUR"
	| "NGN"
	| "GBP"
	| "PHP"
	| "IDR"
	| "JPY"
	| "AUD"
	| "NZD"
	| "ZAR"
	| "BRL"
	| "TRY"
	| "KRW"
	| "MXN"
	| "INR"
	| "CHF"
	| "CNY"
	| "HKD"
	| "SGD"
	| "THB"
	| "CLP"
	| "CZK"
	| "DKK"
	| "HUF"
	| "MYR"
	| "NOK"
	| "PLN"
	| "RUB"
	| "SEK"
	| "TWD"
	| "ARS"
	| "ISK"
	| "ILS"
	| "KZT"
	| "COP"
	| "PEN"
	| "AED"
	| "VND"
	| "SAR"
	| "QAR"
	| "UAH"
	| "BDT"
	| "BGN"
	| "CZK"
	| "HRK"
	| "IDR"
	| "ILS"
	| "INR"
	| "KRW"
	| "LKR"
	| "MUR"
	| "PHP"
	| "PKR"
	| "RON"
	| "RSD"
	| "RUB"
	| "SEK"
	| "THB"
	| "TRY"
	| "UAH"
	| "USD"
	| "VEF"
	| "VND"
	| "ZAR"
