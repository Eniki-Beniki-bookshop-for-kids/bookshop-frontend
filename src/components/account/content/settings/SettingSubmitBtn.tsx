"use client"

import { FC } from "react"
import { ButtonTemplate } from "../../../ui"

interface SettingSubmitBtnProps {
	onSubmit: () => void
}

export const SettingSubmitBtn: FC<SettingSubmitBtnProps> = ({ onSubmit }) => {
	return (
		<ButtonTemplate
			width="264px"
			padding="14px"
			fontSize="18px"
			hoverScale={1.02}
			onClick={onSubmit}
			isLoading={false}
			isDisabled={false}
		>
			Зберегти зміни
		</ButtonTemplate>
	)
}
