import { Currency, QueryParams } from "../types"

/**
 * @param queryParams{QueryParams}
 * @returns string
 * @description This function takes an object of query parameters and returns a string representation of the query parameters. It filters out any null, undefined, or empty string values from the object and encodes the keys and values using encodeURIComponent.
 *
 * @example
 * const queries = queryString({page: 1, limit: 10, sort: "-createdAt", filter: "price"})
 */
export const queryString = (queryParams: QueryParams): string => {
	return Object.keys(queryParams)
		.filter(
			(key) =>
				queryParams[key] !== null &&
				queryParams[key] !== undefined &&
				queryParams[key] !== ""
		)
		.map(
			(key) =>
				`${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key] as string)}`
		)
		.join("&")
}

/**
 * @param amount{number}
 * @param currency{Currency}
 * @returns string
 * @description This function takes a number and a currency and returns a string representation of the number formatted as a currency string in the format "$1,234.56".
 *
 * @example
 * const amount = 1234.56
 * const currency = "USD"
 * const formattedAmount = formatCurrency(amount, currency)
 */
export const formatCurrency = (amount: number, currency: Currency): string => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	}).format(amount)
}
