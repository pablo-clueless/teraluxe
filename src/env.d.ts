const requiredEnvs = [
	"API_URL",
	"APP_URL",
	"NEXT_PUBLIC_API_URL",
	"NEXT_PUBLIC_APP_URL",
	"NEXT_PUBLIC_ENCRYPTION_SECRET_KEY",
	"NEXT_PUBLIC_ENCRYPTION_INTIVECTOR",
	"NODE_ENV",
] as const

type RequiredEnvs = (typeof requiredEnvs)[number]

declare global {
	namespace NodeJS {
		interface ProcessEnv extends Record<RequiredEnvs, string> {
			readonly API_URL: string
			readonly APP_URL: string
			readonly NEXT_PUBLIC_API_URL: string
			readonly NEXT_PUBLIC_APP_URL: string
			readonly NEXT_PUBLIC_ENCRYPTION_SECRET_KEY: string
			readonly NEXT_PUBLIC_ENCRYPTION_INTIVECTOR: string
			readonly NODE_ENV: "development" | "production" | "test"
		}
	}
}

export {}
