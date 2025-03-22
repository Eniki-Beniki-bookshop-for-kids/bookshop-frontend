import { ReactNode } from "react"

export const Main = ({ children }: { children: ReactNode }) => {
	return (
		<main className="flex-1 w-full px-5 md:px-20 lg:px-[80px] bg-customWhite">
			{children}
		</main>
	)
}
