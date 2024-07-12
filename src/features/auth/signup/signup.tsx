import { CaretLeft, GoogleLogo } from "@phosphor-icons/react"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useFormik } from "formik"
import { toast } from "sonner"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { SignupMutation, SignupMutationProps } from "@/query"
import { Seo, Spinner } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HttpError } from "@labs/types"
import { SignupSchema } from "@/schema"
import { logo_dark } from "@/assets"

const initialValues: SignupMutationProps = {
	email: "",
	name: "",
	username: "",
}

export const Signup = () => {
	const router = useRouter()

	const { isPending, mutateAsync } = useMutation({
		mutationFn: (payload: SignupMutationProps) => SignupMutation(payload),
		mutationKey: ["signup"],
		onSuccess: (data) => {
			const { message } = data
			toast.success(message)
			router.push("/")
		},
		onError: ({ response }: HttpError) => {
			const { message } = response?.data
			toast.error(message)
		},
	})

	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		validationSchema: SignupSchema,
		onSubmit: (values) => {
			mutateAsync(values)
		},
	})

	return (
		<>
			<Seo title="Create account" />
			<main className="grid h-screen w-full grid-cols-1 gap-10 p-4 lg:grid-cols-5">
				<div className="col-span-2 flex h-full w-full flex-col items-center justify-between">
					<div className="flex w-full items-center justify-between">
						<Link href="/">
							<Image src={logo_dark} alt="logo" width={100} height={33} />
						</Link>
						<Button size="sm" variant="text" onClick={() => router.back()}>
							<CaretLeft /> Go back
						</Button>
					</div>
					<div className="flex w-full max-w-[80%] flex-col gap-6">
						<div>
							<h4 className="text-primary text-2xl font-medium lg:text-4xl">
								Sign up
							</h4>
							<p className="lg:text-lg">Please fill the form to create an account.</p>
						</div>
						<form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
							<Input
								type="text"
								name="name"
								onChange={handleChange}
								placeholder="Name"
								error={errors.name}
							/>
							<Input
								type="email"
								name="email"
								onChange={handleChange}
								placeholder="Email"
								error={errors.email}
							/>
							<Input
								type="text"
								name="username"
								onChange={handleChange}
								placeholder="Username"
								error={errors.username}
							/>
							<Button type="submit" disabled={isPending}>
								{isPending ? <Spinner /> : "Submit"}
							</Button>
						</form>
						<div className="before:bg-primary relative my-4 flex w-full items-center justify-center before:absolute before:left-0 before:top-1/2 before:h-px before:w-full before:-translate-y-1/2">
							<span className="text-primary !z-[2] bg-white px-2">or</span>
						</div>
						<div className="flex w-full flex-col gap-5">
							<Button variant="secondary">
								<GoogleLogo /> Sign up with Google
							</Button>
						</div>
					</div>
					<p>
						Already have an acount?{" "}
						<Link href="/auth/signin" className="text-primary link">
							Sign in here
						</Link>
					</p>
				</div>
				<div className="bg-secondary-100 col-span-3 hidden h-full w-full rounded-lg lg:flex"></div>
			</main>
		</>
	)
}
