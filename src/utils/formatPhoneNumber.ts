import { AccountFormData } from "../types/interfaces"

export const displayPhoneNumber = (phoneNumber: string): string => {
	if (
		!phoneNumber ||
		phoneNumber.length !== 13 ||
		!phoneNumber.startsWith("+38")
	) {
		return phoneNumber
	}

	const countryCode = phoneNumber.slice(0, 3) // +38
	const areaCode = phoneNumber.slice(3, 6) // 012
	const firstPart = phoneNumber.slice(6, 9) // 345
	const secondPart = phoneNumber.slice(9, 11) // 67
	const thirdPart = phoneNumber.slice(11, 13) // 89

	return `${countryCode} (${areaCode}) ${firstPart} ${secondPart} ${thirdPart}`
}

export const cutPhoneNumber = (
	field: keyof AccountFormData,
	formData: AccountFormData,
) => {
	return field === "phoneNumber" && formData[field]?.startsWith("+380")
		? formData[field].slice(4)
		: formData[field] || ""
}
