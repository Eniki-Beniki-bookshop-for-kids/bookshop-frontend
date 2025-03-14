import { ReactNode } from "react"

export interface IButtonProps {
	height?: number
	width?: number
	size?: number
	colorFill?: string
	colorStroke?: string
	isStatic?: boolean
	onClick?: () => void
	disabled?: boolean
	isHovered?: boolean
	headerType?: "full" | "minimal"
}

export interface CheckboxTemplateProps {
	isChecked?: boolean
	onChange?: (checked: boolean) => void
	value?: string
	defaultValue?: string
	name?: string
	label?: string
}

interface RadioItemProps {
	value: string
	label: string
}

export interface RadioCheckboxTemplateProps {
	items: RadioItemProps[]
	name?: string
	defaultValue?: string
	onChange?: (value: string) => void
}

export interface RangeSliderTemplateProps {
	min?: number
	max?: number
	defaultValue?: [number, number]
	onChange?: (value: [number, number]) => void
}

export interface SelectTemplateProps {
	placeholder?: string
	options: { value: string; label: string }[]
	onChange?: (value: string) => void
	defaultValue?: string
}

export interface NavbarProps {
	label: string
	href: string
	headerType?: "full" | "minimal"
}

export interface ModalTemplateProps {
	isOpen: boolean
	onClose: () => void
	title?: string
	children?: ReactNode
	footer?: ReactNode
}

export interface CustomInputProps {
	type: string
	placeholder: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	error: string
	mb?: number
	mt?: number
}
