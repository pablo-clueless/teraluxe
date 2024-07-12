import { BaseResponse, UserProps } from "@labs/types"
import { instance } from "@labs/utils"
import { endpoints } from "@/config"

export interface SignupMutationProps {
	email: string
	name: string
	username: string
}

export interface VerificationQueryProps {
	email: string
	token: string
}

export interface ContactFormMutationProps {
	name: string
	email: string
	phone: string
	message: string
}

const SignupMutation = async (payload: SignupMutationProps) => {
	return instance
		.post<BaseResponse<any>>(endpoints().auth.signup, payload)
		.then((res) => res.data)
}

const SigninMutation = async (email: string) => {
	return instance
		.post<BaseResponse<any>>(endpoints().auth.signin, { email })
		.then((res) => res.data)
}

const VerificationQuery = async (payload: { email: string; token: string }) => {
	return instance
		.get<BaseResponse<any>>(endpoints(null, payload).auth.verification)
		.then((res) => res.data)
}

const MfaQuery = async (token: string) => {
	return instance
		.get<
			BaseResponse<{ user: UserProps; token: string }>
		>(endpoints(null, { token }).auth.mfa)
		.then((res) => res.data)
}

const ContactFormMutation = async (payload: ContactFormMutationProps) => {
	return instance
		.post<BaseResponse<any>>(endpoints().contact.send, payload)
		.then((res) => res.data)
}

export {
	ContactFormMutation,
	MfaQuery,
	SignupMutation,
	SigninMutation,
	VerificationQuery,
}
