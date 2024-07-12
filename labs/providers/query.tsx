import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"

interface Props {
	children: React.ReactNode
}

const cacheTime = 1000 * 60 * 60 * 24 // 24 hours

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: cacheTime,
			refetchOnWindowFocus: false,
			refetchOnMount: false,
		},
	},
})

const QueryProvider = ({ children }: Props) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export { QueryProvider, queryClient }
