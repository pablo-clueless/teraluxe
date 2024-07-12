import Cookies from "js-cookie"

import { createPersistMiddleware } from "../middleware"
import type { UserProps } from "@labs/types"

interface UserStore {
	user: UserProps | null
	signIn: (user: UserProps, token: string) => void
	signOut: (options?: { redirect?: string; soft?: boolean }) => void
}

const initialState: UserStore = {
	user: null,
	signIn: () => {},
	signOut: () => {},
}

const useUserStore = createPersistMiddleware<UserStore>("user", (set) => ({
	...initialState,
	signIn: (user, token) => {
		set({ user })
		Cookies.set("TERALUXE_TOKEN", token, {
			path: "/",
			sameSite: "None",
			secure: true,
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30) /* 30 days */,
		})
	},
	signOut: async ({ redirect, soft } = {}) => {
		try {
			set({ user: null })
			if (!soft) {
				Cookies.set("TERALUXE_TOKEN", "", { expires: 0 })
			}
		} catch {
		} finally {
			window.location.replace(redirect ?? "/auth/signin")
			window.localStorage.removeItem("user")
			Cookies.set("TERALUXE_TOKEN", "", { expires: 0 })
		}
	},
}))

export { useUserStore }
