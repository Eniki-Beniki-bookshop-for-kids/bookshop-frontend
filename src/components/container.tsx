import { ReactNode } from "react"

export const Container = ({ children }: { children: ReactNode }) => {
	return (
		<main className="w-full h-auto px-5 md:px-20 lg:px-[80px] bg-customWhite">
			{children}
		</main>
	)
}
