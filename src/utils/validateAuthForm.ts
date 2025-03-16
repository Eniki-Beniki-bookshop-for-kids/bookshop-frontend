import { authCredentials } from "../types/constants"

export const validateAuthForm = (
	formData: typeof authCredentials,
	isRegister: boolean,
): { errors: typeof authCredentials; isValid: boolean } => {
	const errors = { ...authCredentials }
	let isValid = true

	if (formData.login.length < 7) {
		errors.login = "Ой! А треба мінімум 7 символів :)"
		isValid = false
	}

	if (formData.password.length < 7) {
		errors.password = "Ой! А треба мінімум 7 символів :)"
		isValid = false
	}

	if (isRegister && formData.password !== formData.confirmPassword) {
		errors.confirmPassword = "Паролі не співпадають :)"
		isValid = false
	}

	return { errors, isValid }
}
