import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import type { AppProps } from "next/app"

import { QueryProvider, SSRProvider } from "@labs/providers"
import { Toaster } from "@/components/ui/sonner"
import "@/styles/index.scss"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryProvider>
			<SSRProvider>
				<Component {...pageProps} />
				<Toaster />
			</SSRProvider>
			<ReactQueryDevtools />
		</QueryProvider>
	)
}
