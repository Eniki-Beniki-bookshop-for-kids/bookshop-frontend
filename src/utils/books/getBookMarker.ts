//src/utils/books/getBookMarker.ts
import { Book } from "@/types/models"

// Функція для визначення плашки-маркера на карточці книги
export const getBookMarker = (book: Book): string | null => {
	const oneMonthAgo = new Date()
	oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
	const createdAt = new Date(book.createdAt)

	if (book.isBestseller) return "Бестселер"
	if (book.totalSales && book.totalSales >= 1000) return "Популярне"
	if (createdAt > oneMonthAgo) return "Новинка"
	if (book.isGifted) return "Подарункове видання"
	return null
}
