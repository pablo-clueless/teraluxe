import { useMutation } from "@tanstack/react-query"
import { useFormik } from "formik"
import { toast } from "sonner"
import React from "react"

import { ContactFormMutation, ContactFormMutationProps } from "@/query"
import { Appbar, Footer, Seo, Spinner } from "@/components/shared"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ContactFormSchema } from "@/schema"
import { HttpError } from "@labs/types"
import { contacts } from "./data"

const initialValues: ContactFormMutationProps = {
	name: "",
	email: "",
	phone: "",
	message: "",
}

export const Contact = () => {
	const { isPending } = useMutation({
		mutationFn: (payload: ContactFormMutationProps) =>
			ContactFormMutation(payload),
		mutationKey: ["contact-form"],
		onSuccess: (data) => {
			console.log(data)
		},
		onError: ({ response }: HttpError) => {
			const { message } = response.data
			toast.error(message)
		},
	})

	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		validationSchema: ContactFormSchema,
		onSubmit: (values) => {
			console.log(values)
		},
	})

	return (
		<>
			<Seo title="Get help" />
			<Appbar />
			<main className="flex w-full flex-col items-center justify-center px-4 lg:px-0">
				<section className="flex w-full max-w-[1200px] flex-col items-center gap-5 py-10">
					<div className="flex w-full flex-col items-center justify-center gap-2 text-center">
						<h4 className="text-2xl font-semibold uppercase lg:text-4xl">
							Contact our team
						</h4>
						<p className="font-medium lg:max-w-[50%] lg:text-lg">
							We are here to help you, just send us a message and we will get back to
							you as soon as possible.
						</p>
					</div>
					<div className="mt-10 grid w-full grid-cols-1 gap-10 lg:grid-cols-5">
						<div className="col-span-3 flex w-full">
							<form
								onSubmit={handleSubmit}
								className="flex w-full flex-col gap-3 lg:max-w-[50%]">
								<Input
									type="text"
									name="name"
									onChange={handleChange}
									placeholder="Enter your name"
									error={errors.name}
								/>
								<Input
									type="email"
									name="email"
									onChange={handleChange}
									placeholder="Enter your email"
									error={errors.email}
								/>
								<Input
									type="tel"
									name="phone"
									onChange={handleChange}
									placeholder="Enter your phone number"
									error={errors.phone}
								/>
								<Textarea
									name="message"
									onChange={handleChange}
									placeholder="Enter your message"
									error={errors.message}
									wrapperClassName="h-[150px]"
								/>
								<Button type="submit" disabled={isPending}>
									{isPending ? <Spinner /> : "Send"}
								</Button>
							</form>
						</div>
						<div className="col-span-2 flex w-full flex-col gap-10">
							{contacts.map(({ options, title }) => (
								<div key={title} className="flex w-full flex-col gap-3">
									<h6 className="text-lg font-medium lg:text-2xl">{title}</h6>
									<div className="flex flex-col gap-2">
										{options.map((option, index) => (
											<div key={index} className="flex items-center gap-1">
												<option.icon size={20} />
												<a
													href={option.href}
													target="_blank"
													className="link text-sm font-medium text-primary">
													{option.label}
												</a>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
