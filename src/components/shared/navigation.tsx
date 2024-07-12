import Link from "next/link"
import React from "react"

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export const Navigation = () => {
	return (
		<div>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href="/about">
							<NavigationMenuLink asChild>About</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/contact">
							<NavigationMenuLink asChild>Contact</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Apartments</NavigationMenuTrigger>
						<NavigationMenuContent></NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	)
}
