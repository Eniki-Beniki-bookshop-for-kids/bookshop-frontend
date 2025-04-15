//src/components/Main.tsx
import { ReactNode } from "react"
import { Breadcrumbs } from "./Breadcrumbs"

export const Main = ({ children }: { children: ReactNode }) => {
	return (
		<main className="flex-1 w-full pb-12 px-5 md:px-20 lg:px-[80px] bg-customWhite">
			<Breadcrumbs />
			{children}
		</main>
	)
}
