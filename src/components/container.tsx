import { ReactNode } from "react"

interface ContainerProps {
	children: ReactNode
}

export default function Container({ children }: ContainerProps) {
	return (
		<div className="fixed top-0 left-80 right-80 bottom-[106px] bg-white z-10">
			{children}
		</div>
	)
}
