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
}

export interface CheckboxTemplateProps {
	isChecked?: boolean
	onChange?: (checked: boolean) => void
	value?: string
	defaultValue?: string
	name?: string
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
}
