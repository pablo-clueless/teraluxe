import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import React from "react"

import { Loading, Modal, Seo } from "@/components/shared"
import { VerificationQuery } from "@/query"

export const Verification = () => {
	const router = useRouter()
	const { email, token } = router.query
	console.log({ email, token })

	const { data, isPending } = useQuery({
		queryFn: () =>
			VerificationQuery({ email: String(email), token: String(token) }),
		queryKey: ["mfa"],
		enabled: !!email && !!token,
	})

	if (isPending) <Loading />

	if (data?.error) {
		return <Modal message={data?.message} />
	}

	return (
		<>
			<Seo title="Verify your email address" />
			<Modal message={String(data?.message)} color="success" />
		</>
	)
}
