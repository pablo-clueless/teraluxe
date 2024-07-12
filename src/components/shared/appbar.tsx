import { BellSimple, List, User } from "@phosphor-icons/react"
import Image from "next/image"
import { toast } from "sonner"
import Link from "next/link"
import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useUserStore } from "@/store/z-store"
import { logo_light } from "@/assets"
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"

export const Appbar = () => {
	const [scrolled, setScrolled] = React.useState(false)
	const { user } = useUserStore()

	const handleScroll = () => setScrolled(window.scrollY >= 500)

	const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			const query = e.currentTarget.value
			if (!query) {
				return toast.error("Please enter a search query")
			}
			console.log(query)
			e.currentTarget.value = ""
		}
	}

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	})

	return (
		<nav
			className={`left-0 top-0 !z-20 flex w-screen items-center justify-center bg-secondary-100 px-4 py-4 lg:px-0 ${scrolled ? "fixed" : "static"}`}>
			<div className="flex w-full max-w-[1200px] items-center justify-between">
				<Link href="/" className="relative aspect-[3/1] w-[120px]">
					<Image src={logo_light} alt="logo" fill sizes="(max-width:1024px)100%" />
				</Link>
				<Input
					placeholder="Search"
					onKeyDown={handleSearch}
					wrapperClassName="hidden !max-w-[300px] lg:flex"
					className="text-white"
				/>
				<div className="hidden items-center gap-5 lg:flex">
					<Sheet>
						<SheetTrigger asChild>
							<Button size="icon">
								<BellSimple size={18} />
							</Button>
						</SheetTrigger>
						<SheetContent aria-describedby="notification-tab">
							<SheetTitle></SheetTitle>
						</SheetContent>
					</Sheet>
					{user === null ? (
						<Link href="/auth/signin">
							<Button>Sign in</Button>
						</Link>
					) : (
						<Button size="icon">
							<User size={18} />
						</Button>
					)}
				</div>
				<div className="block lg:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<List size={24} color="#fff" />
						</SheetTrigger>
						<SheetContent aria-describedby="hamburger-menu">
							<SheetTitle></SheetTitle>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	)
}
