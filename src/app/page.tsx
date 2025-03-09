"use client"

import {
	ButtonsUI,
	IconsUI,
	MultipleCheckBoxUI,
	RadioCheckBoxUI,
	RangeSliderUI,
	SelectUI,
} from "../components/temporary"

export default function Home() {
	return (
		<div className="justify-center flex py-5 gap-20">
			<div className="flex items-center flex-col gap-20">
				<div className="flex items-center flex-col">
					<div className="text-2xl mb-5">Чек-бокси</div>
					<MultipleCheckBoxUI />
					<RadioCheckBoxUI />
				</div>
				<div className="flex items-center flex-col">
					<div className="text-2xl">Фільтри</div>
					<SelectUI />
				</div>
				<div className="flex items-center flex-col">
					<div className="text-2xl">Слайдери</div>
					<RangeSliderUI />
				</div>
			</div>
			<ButtonsUI />
			<IconsUI />
		</div>
	)
}
