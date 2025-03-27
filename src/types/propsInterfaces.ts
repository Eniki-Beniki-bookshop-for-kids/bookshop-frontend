import { ChangeEvent, ReactNode } from "react"

export interface PageProps {
	label: string
	href: string
}
export interface NavbarProps extends PageProps {
	headerType?: "full" | "minimal"
	isActive?: boolean
}
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

export interface ModalTemplateProps {
	isOpen: boolean
	onClose: () => void
	title?: string
	children?: ReactNode
	footer?: ReactNode
	isRegister?: boolean
}

export interface CustomInputProps {
	type: string
	placeholder: string
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	error: string | undefined
	mb?: number
	mt?: number
	pr?: string
}

export interface ImageLinkProps {
	src: string
	alt: string
	href?: string
}
