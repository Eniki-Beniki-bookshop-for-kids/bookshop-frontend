"use client"

import { useState } from "react"
import {
	BasketIcon,
	ButtonTemplate,
	PenIconBtn,
	PhoneIcon,
	TrashIconBtn,
} from "../ui"

export const ButtonsUI = () => {
	const [isHovered, setIsHovered] = useState(false)
	return (
		<div className="items-center flex flex-col gap-5">
			<div className="text-2xl mb-5">Кнопки</div>
			<div className="items-center flex flex-col gap-3">
				<ButtonTemplate
					width="295px"
					fontSize="18px"
					padding="13px"
					borderColor="customBlack"
					borderWidth={1}
					bgColor="customViolet"
					_hover={{
						backgroundColor: "customLavender",
						color: "customWhite",
						borderColor: "transparent",
					}}
				>
					Купити
				</ButtonTemplate>
				<ButtonTemplate
					width="295px"
					fontSize="18px"
					padding="13px"
					borderColor="transparent"
					borderWidth={1}
					bgColor="customViolet"
					_hover={{
						backgroundColor: "customLavender",
						color: "customWhite",
						borderColor: "transparent",
					}}
					iconBefore={<BasketIcon colorFill="customWhite" />}
				>
					У кошику
				</ButtonTemplate>
				<ButtonTemplate
					width="120px"
					padding="11px"
					color="customBlack"
					borderColor="customViolet"
					borderWidth={1}
					bgColor="customWhite"
					_hover={{
						backgroundColor: "customLavender",
					}}
				>
					Надіслати
				</ButtonTemplate>
				<ButtonTemplate
					width="100%"
					fontSize="18px"
					padding="13px"
					borderColor="transparent"
					borderWidth={1}
					bgColor="customViolet"
					_hover={{
						backgroundColor: "customLavender",
						color: "customWhite",
						borderColor: "transparent",
					}}
				>
					Продовжити
				</ButtonTemplate>
				<ButtonTemplate
					width="120px"
					fontSize="16px"
					padding="6px"
					borderColor="transparent"
					borderWidth={1}
					bgColor="customViolet"
					_hover={{
						backgroundColor: "customLavender",
						color: "customWhite",
						borderColor: "transparent",
					}}
				>
					Купити
				</ButtonTemplate>
				<ButtonTemplate
					fontSize="16px"
					padding="6px"
					borderColor="transparent"
					borderWidth={1}
					bgColor="customViolet"
					_hover={{
						backgroundColor: "customLavender",
						color: "customWhite",
						borderColor: "transparent",
					}}
					iconBefore={<BasketIcon colorFill="customWhite" />}
				>
					У кошику
				</ButtonTemplate>
				<ButtonTemplate
					width="auto"
					padding="13px"
					borderColor="transparent"
					borderWidth={1}
					bgColor="customViolet"
					_hover={{
						backgroundColor: "customLavender",
						color: "customWhite",
						borderColor: "transparent",
					}}
					iconBefore={<PenIconBtn colorFill="customWhite" isStatic />}
				>
					Змінити фото
				</ButtonTemplate>
				<ButtonTemplate
					width="auto"
					padding="13px"
					color="customBlack"
					borderColor="customViolet"
					borderWidth={1}
					bgColor="customWhite"
					_hover={{
						backgroundColor: "customLavender",
						borderColor: "customViolet",
					}}
					iconBefore={<TrashIconBtn isStatic />}
				>
					Видалити фото
				</ButtonTemplate>
				<ButtonTemplate
					href="tel:+380956522328"
					bgColor="transparent"
					textColor="customBlack"
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
