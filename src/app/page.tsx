"use client"

import { ButtonsUI } from "../components/temporary/ButtonsUI"
import IconsUI from "../components/temporary/IconsUI"
import MultipleCheckBoxUI from "../components/temporary/MultipleCheckBoxUI"

export default function Home() {
	return (
		<div className="justify-center flex py-5 gap-10">
			<div className="justify-center flex flex-col py-5 gap-10">
				<MultipleCheckBoxUI />
			</div>
			<ButtonsUI />
			<IconsUI />
		</div>
	)
}
