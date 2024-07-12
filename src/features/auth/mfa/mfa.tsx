import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import React from "react"

import { Loading, Modal, Seo } from "@/components/shared"
import { useUserStore } from "@/store/z-store"
import { MfaQuery } from "@/query"

export const Mfa = () => {
	const { signIn } = useUserStore()
	const router = useRouter()
	const token = router.query.token as string

	const { data, isPending } = useQuery({
		queryFn: () => MfaQuery(token),
		queryKey: ["mfa"],
		enabled: !!token,
	})

	if (isPending) <Loading />

	if (data?.error) {
		return <Modal message={data?.message} />
	}

	if (data?.data) {
		const { user, token } = data?.data
		signIn(user, token)
	}

	return (
		<>
			<Seo title="Validate user login" />
			<Modal message={String(data?.message)} color="success" />
		</>
	)
}
