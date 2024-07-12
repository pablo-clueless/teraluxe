import * as Yup from "yup"

const SignupSchema = Yup.object({
	email: Yup.string()
		.email("Please enter a valid email!")
		.required("Please enter your email!"),
	name: Yup.string().required("Please enter your name!"),
	username: Yup.string().required("Please enter your username!"),
})

const SigninSchema = Yup.object({
	email: Yup.string()
		.email("Please enter a valid email!")
		.required("Please enter your email!"),
})

const ContactFormSchema = Yup.object({
	name: Yup.string().required("Please enter your name!"),
	email: Yup.string()
		.email("Please enter a valid email!")
		.required("Please enter your email!"),
	phone: Yup.string()
		.required("Please enter your phone number!")
		.matches(
			/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
			"Please enter a valid phone number!"
		),
	message: Yup.string().required("Please enter your message!"),
})

export { ContactFormSchema, SigninSchema, SignupSchema }
