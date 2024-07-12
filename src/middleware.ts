import { NextURL } from "next/dist/server/web/next-url"
import { NextRequest, NextResponse } from "next/server"

export const config = {
	matcher: ["/", "/auth/:path*", "/dashboard/:path*"],
	name: "middleware",
}

export function middleware(req: NextRequest) {
	const hasToken = req.cookies.has("TERALUXE_TOKEN")
	const url = req.nextUrl.clone() // Clone the URL to modify it
	const isOnDashboard = url.pathname.startsWith("/dashboard")

	const redirectResponse = (url: string | NextURL) => {
		const response = NextResponse.redirect(url)
		response.headers.set("x-middleware-cache", "no-cache") // ! FIX: Disable caching
		return response
	}

	// Redirects for users with a token trying to access auth
	if (hasToken && !isOnDashboard) {
		url.pathname = "/dashboard"
		redirectResponse(url)
		return null
	}

	// Redirect users without a token trying to access any dashboard/* path
	if (!hasToken && isOnDashboard) {
		url.pathname = "/auth/signin"
		redirectResponse(url)
		return null
	}

	return NextResponse.next()
}
