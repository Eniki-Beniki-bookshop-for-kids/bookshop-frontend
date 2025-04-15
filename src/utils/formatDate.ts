//src/utils/formatDate.ts
export const formatDate = (date: string | null | undefined): string => {
	if (!date) return ""
	const parsedDate = new Date(date)
	if (isNaN(parsedDate.getTime())) return ""
	return parsedDate.toISOString().split("T")[0] // Повертаємо YYYY-MM-DD
}
