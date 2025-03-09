import { ReactNode } from "react"

export default function Container({ children }: { children: ReactNode }) {
	return (
		<div className="w-full h-auto px-5 md:px-20 lg:px-[80px] bg-customWhite">
			{children}
		</div>
	)
}
