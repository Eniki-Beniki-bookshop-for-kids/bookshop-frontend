//src/components/header/Phone.tsx
"use client"

import { useState } from "react"
import { ButtonTemplate, PhoneIcon } from "../ui"

export const Phone = () => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<ButtonTemplate
			href="tel:+380956522328"
			bgColor="transparent"
			textColor="customBlack"
			fontSize="18"
			paddingRight="0px"
			hoverScale={1.05}
			iconBefore={<PhoneIcon isHovered={isHovered} />}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			+380956522328
		</ButtonTemplate>
	)
}
