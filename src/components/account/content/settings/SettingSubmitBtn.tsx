//src/components/account/content/settings/SettingSubmitBtn.tsx
"use client"

import { FC } from "react"
import { ButtonTemplate } from "../../../ui"

interface SettingSubmitBtnProps {
	onSubmit: () => void
	isUpdating: boolean
}

export const SettingSubmitBtn: FC<SettingSubmitBtnProps> = ({
	onSubmit,
	isUpdating,
}) => {
	return (
		<ButtonTemplate
			width="264px"
			padding="14px"
			fontSize="18px"
			hoverScale={1.02}
			onClick={onSubmit}
			isLoading={isUpdating}
			isDisabled={isUpdating}
		>
			Зберегти зміни
		</ButtonTemplate>
	)
}
