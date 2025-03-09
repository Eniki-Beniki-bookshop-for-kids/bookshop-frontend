"use client"

import { ButtonsUI } from "../components/temporary/ButtonsUI"
import IconsUI from "../components/temporary/IconsUI"
import MultipleCheckBoxUI from "../components/temporary/MultipleCheckBoxUI"
import RadioCheckBoxUI from "../components/temporary/RadioCheckBoxUI"

export default function Home() {
	return (
		<div className="justify-center flex py-5 gap-20">
			<div className="flex items-center flex-col gap-5">
				<div className="text-2xl mb-5">Чек-бокси</div>
				<div className="flex items-center flex-col gap-20">
					<MultipleCheckBoxUI />
					<RadioCheckBoxUI />
				</div>
			</div>
			<ButtonsUI />
			<IconsUI />
		</div>
	)
}
