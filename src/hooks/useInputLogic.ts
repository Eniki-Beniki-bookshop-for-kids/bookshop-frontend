// useInputLogic.ts
import { useRef, useState } from "react"

export const useInputLogic = (type: string) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)
	const inputRef = useRef<HTMLInputElement>(null)

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(prev => !prev)
	}

	const handleIconClick = () => {
		if (inputRef.current) {
			inputRef.current.focus()
			try {
				inputRef.current.showPicker()
			} catch (e) {
				console.log("showPicker failed, dispatching click event:", e)
				const clickEvent = new Event("click", { bubbles: true })
				inputRef.current.dispatchEvent(clickEvent)
			}
		}
	}

	const inputType = type === "password" && isPasswordVisible ? "text" : type
	const isPasswordField = type === "password"

	return {
		inputRef,
		inputType,
		isPasswordField,
		isPasswordVisible,
		togglePasswordVisibility,
		handleIconClick,
	}
}
