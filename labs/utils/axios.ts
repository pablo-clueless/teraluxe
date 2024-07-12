import Cookies from "js-cookie"
import axios from "axios"

/**
 * @returns axios instance
 * @description This function creates an instance of the axios client and adds a request interceptor to the instance. The interceptor adds the Authorization header to the request if a token exists in the cookies.
 */
const createInstance = () => {
	let instance = axios.create()

	instance.interceptors.request.use((config) => {
		const token = Cookies.get("TERALUXE_TOKEN")
		config.headers.Authorization = `Bearer ${token}`
		return config
	})

	return instance
}

export const instance = createInstance()
