"use client"

import { useState } from "react"
import { BasketIcon, ButtonTemplate, PhoneIcon } from "../ui"

export const ButtonsUI = () => {
	const [isHovered, setIsHovered] = useState(false)
	return (
		<div className="items-center flex flex-col gap-5 py-5">
			<div className="text-2xl mb-5">Кнопки</div>
			<div className="items-center flex flex-col gap-2">
				<ButtonTemplate
					borderColor="customBlack"
					borderWidth={1}
					bgColor="customViolet"
					_hover={{
						backgroundColor: "customLavender",
						color: "#FFF",
						borderColor: "transparent",
					}}
				>
					Купити
				</ButtonTemplate>
				<ButtonTemplate
					borderColor="customBlack"
					borderWidth={1}
					bgColor="customViolet"
					_hover={{
						backgroundColor: "customLavender",
						color: "#FFF",
						borderColor: "transparent",
					}}
					iconBefore={<BasketIcon colorFill="customWhite" />}
				>
					У кошику
				</ButtonTemplate>
				<ButtonTemplate
					href="tel:+380956522328"
					bgColor="transparent"
					textColor="customBlack"
					fontWeight={400}
					hoverScale={1.05}
					iconBefore={<PhoneIcon isHovered={isHovered} />}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					+380956522328
				</ButtonTemplate>
			</div>
		</div>
	)
}
