export interface IButtonProps {
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
