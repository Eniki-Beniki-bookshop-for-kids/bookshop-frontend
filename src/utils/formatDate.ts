//src/utils/formatDate.ts
export const formatDate = (date: string | null | undefined): string => {
	if (!date) return ""
	const parsedDate = new Date(date)
	if (isNaN(parsedDate.getTime())) return ""
	return parsedDate.toISOString().split("T")[0] // Повертаємо YYYY-MM-DD
}

export const formatDateToString = (daysToAdd: number): string => {
	const today = new Date()
	today.setDate(today.getDate() + daysToAdd)
	return today.toISOString()
}
