"use client"

import { PhoneIcon } from "@/components/ui"
import Link from "next/link"
import { FC, useState } from "react"

export const PhoneBtn: FC = ({
	phoneNumber = "+380956522328",
}: {
	phoneNumber?: string
}) => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<Link
			href={`tel:${phoneNumber}`}
			className="flex items-center gap-1 p-3 transform hover:scale-105 transition-transform no-underline"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<PhoneIcon isHovered={isHovered} />
			<span className="text-customBlack text-lg">{phoneNumber}</span>
		</Link>
	)
}
