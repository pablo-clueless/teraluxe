import { createReportableStore } from "../middleware"

interface GlobalStore {
	loading: boolean
}

const initialState: GlobalStore = {
	loading: false,
}

const useGlobalStore = createReportableStore<GlobalStore>((set) => ({
	...initialState,
	setLoading: (loading: boolean) => set({ loading }),
}))

export { useGlobalStore }
