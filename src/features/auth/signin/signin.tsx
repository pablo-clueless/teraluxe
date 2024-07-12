import { CaretLeft, GoogleLogo } from "@phosphor-icons/react"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useFormik } from "formik"
import { toast } from "sonner"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Seo, Spinner } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SigninMutation } from "@/query"
import { HttpError } from "@labs/types"
import { SigninSchema } from "@/schema"
import { logo_dark } from "@/assets"

const initialValues = {
	email: "",
}

export const Signin = () => {
	const router = useRouter()

	const { isPending, mutateAsync } = useMutation({
		mutationFn: (payload: string) => SigninMutation(payload),
		mutationKey: ["signup"],
		onSuccess: (data) => {
			const { message } = data
			toast.success(message)
		},
		onError: ({ response }: HttpError) => {
			const { message } = response?.data
			toast.error(message)
		},
	})

	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		validationSchema: SigninSchema,
		onSubmit: (values) => {
			mutateAsync(values.email)
		},
	})

	return (
		<>
			<Seo title="Welcome back" />
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
								Sign in
							</h4>
							<p className="lg:text-lg"></p>
						</div>
						<form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
							<Input
								type="email"
								name="email"
								onChange={handleChange}
								placeholder="Email"
								error={errors.email}
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
						Need an acount?{" "}
						<Link href="/auth/signup" className="text-primary link">
							Create an account
						</Link>
					</p>
				</div>
				<div className="bg-secondary-100 col-span-3 hidden h-full w-full rounded-lg lg:flex"></div>
			</main>
		</>
	)
}
