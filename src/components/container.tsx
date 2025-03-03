import { ReactNode } from "react"

export default function Container({ children }: { children: ReactNode }) {
	return (
		<div className="w-full box-border px-5 md:px-20 lg:px-[80px] bg-white">
			{children}
		</div>
	)
}
